import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom'
function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState("")
    const [messages, setMessages] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // do some db heere
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc')
                .onSnapshot(snapshot =>
                    setMessages(snapshot.docs.map((doc) => doc.data())
                    ))
        }
    }, [id])
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>

    ) : (
            <div onClick={createChat} className="sidebarchat">
                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat
