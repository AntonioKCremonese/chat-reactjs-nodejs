import React, { useState } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'


function Chat() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{}]);

    const socket = io('localhost:8080');

    socket.on('RECEIVE_MESSAGE', data => {
        addMessage(data);
    });

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
    
            <div className = "container" >
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">Chat Sample</div>
                                    <hr />
                                    <div className="messages">
                                        {messages.map((message, idx) => {
                                            return (
                                                <div key={idx}>{message.author} : {message.message}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <br />
                                    <input type="text" placeholder="Message" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} />
                                    <br />
                                    <button className="btn btn-primary form-control" onClick={(e) => sendMessage(e)}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    

            
    );
}

export default Chat;