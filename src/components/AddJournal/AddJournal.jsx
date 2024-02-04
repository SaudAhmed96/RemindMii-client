import React, { useEffect, useRef, useState } from 'react'
import './AddJournal.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddJournal = () => {

    const baseURL = 'http://localhost:8080'
    const navigate = useNavigate();

    //Recording variables
    const [isRecording, setIsRecording] = useState(false);
    const [recordingComplete, setRecordingComplete] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [longTranscript, setLongTranscript] = useState("")
    const [cleanLongTranscript, setCleanLongTranscript] = useState("")
    const recognitionRef = useRef(null);

    //Form variables
    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");

    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop()
            }
        }
    }, [])

    //function for updating form variables
    const updateVariable = (event, setFormVar) => {
        setFormVar(event.target.value)
    }

    //functions for recording
    const startRecording = () => {
        setIsRecording(true);
        setRecordingComplete(false)

        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event) => {
            const { transcript } = event.results[event.results.length - 1][0]

            setTranscript(transcript)
            setLongTranscript(event.results)
        }

        recognitionRef.current.start()
    }

    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            setRecordingComplete(true);
            setTranscript("")

            let sentenceString = []

            for (let i = 0; i < longTranscript.length; i++) {
                sentenceString.push(longTranscript[i][0].transcript)
            }
            setCleanLongTranscript(sentenceString.join(' '))
            setEntry(sentenceString.join(' '))
        }
    }

    const handleToggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            startRecording();
        }
        else {
            stopRecording();
        }
    }

    //send data to backend to get new row
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(entry, title)

        if (entry && title) {
            axios
                .post(
                    `${baseURL}/journal`,
                    {
                        title: title,
                        entry: entry,
                        user_id: 1
                    },
                    { headers: { "Content-Type": "application/json" }, }
                )
                .then((res) => {
                    console.log(res)
                    // setUpdateTable(!updateTable)
                    setTitle("")
                    setEntry("")

                    setTranscript("")
                    setRecordingComplete(false)

                    navigate('/journal')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            // console.log(title, entry)
            alert("Please make sure all fields are filled before submission")
        }

    }



    return (
        <div className='addjournal'>
            <h1 className='addJournal__addRem'>Add Journal Entry</h1>

            <form className='form' onSubmit={handleSubmit}>
                <label className='form__label'>Title</label>
                <input
                    className='form__input'
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(event) => { updateVariable(event, setTitle) }}
                />

                <div onClick={handleToggleRecording} className='form__record'>
                    {isRecording ? "Stop" : "Record Entry"}
                </div>

                {(transcript && !recordingComplete) &&
                    (
                        <p className='form__transcript'>
                            {transcript}
                        </p>
                    )}
                <p></p>

                <label className='form__label'>Entry</label>
                <textarea
                    className='form__textarea'
                    type='text'
                    placeholder='Some text can go here...'
                    value={entry}
                    onChange={(event) => { updateVariable(event, setEntry) }}
                />
                <button className='form__submit' type='submit'>Submit</button>
            </form>





        </div>
    )
}

export default AddJournal