import { Avatar, IconButton } from "@material-ui/core"
import React, { useState, useEffect } from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("yo ", input)
        setInput('')
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seend at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">An Doan</span>
                    Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">An Doan</span>
                    Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">An Doan</span>
                    Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>

                <p className="chat__message">Hey guys</p>
                <p className="chat__message">Hey guys</p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
