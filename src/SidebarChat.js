import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import db from './firebase'
function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState("")
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
    return !addNewChat ? (
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sidebarchat">
                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat
