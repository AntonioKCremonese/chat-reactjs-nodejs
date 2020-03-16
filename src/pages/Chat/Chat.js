import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import Form from './style';
import Axios from 'axios';

function Chat() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { userId } = useSelector(state => state.data)
    const socket = io('localhost:8080');

    socket.on('RECEIVE_MESSAGE', data => {
        addMessage(data);
    });

    useEffect(() => {
        Axios.get(`http://localhost:8080/user/${userId}`)
        .then(res => {
             setUsername(res.data.name)    
        })
        .catch(e => console.error(e))
    })

    const sendMessage = e => {
        e.preventDefault();
        socket.emit('SEND_MESSAGE', {
            author: username,
            message
        })

        setMessage('');
    }

    const addMessage = data => {

        setMessages([...messages, {
            author: data.author,
            message: data.message
        }]);
    }

    return (

        <Form id="chat">
            <input disabled id="user" type="text" name="username" placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} />
            <div className="messages">
                {messages.length > 0 ? messages.map((message, idx) => {
                    return (
                        <strong key={idx}>{message.author} : {message.message}</strong>
                    )
                }) : null}
            </div>
            <input id="message" type="text" name="message" placeholder="Digite sua mensagem" value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit" onClick={e => sendMessage(e)}>Enviar</button>
        </Form>

    );
}

export default Chat;