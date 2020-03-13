import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './style';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

function Login() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post('http://localhost:8080/authenticate', { mail, password }, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                setToken(response.data.token);
                dispatch({ type: 'AUTHENTICATED', auth: true });
            })
            .catch(e => {
                console.error(e);
            })
    }
    return (

        <Form id="chat" onSubmit={(e) => handleSubmit(e)}>

            <label>Email:</label> <input id="mail" name="mail" type="text" value={mail} onChange={e => setMail(e.target.value)} />
            <label>Senha:</label> <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <p>
                <Link to="/signup" />Não possui cadastro?
                </p>
            <label id='error' ></label>
        </Form>

    )
}

export default Login;