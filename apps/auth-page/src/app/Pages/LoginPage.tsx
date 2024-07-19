import React, { useState } from 'react';
import * as ui from '@biblioteca-personal/ui';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@biblioteca-personal/redux'; // Ajusta la ruta según sea necesario
import {setCodeSent} from '@biblioteca-personal/redux';

import {LibraryType, Icons} from '@biblioteca-personal/shared-types';
import './LoginPage.css';
import { redirect, useNavigate } from 'react-router-dom';



export default function LoginPage(){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const dispatch = useAppDispatch();
    const codeSent = useSelector((state: RootState) => state.code.codeSent)
    const navigate = useNavigate();
    const sendCode = async() => {
        const response = await fetch('/api/sendCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, email }),
        });
        const data = await response.json();
        if (data.status === 200) {
            dispatch(setCodeSent(true));
        }
    };
    const checkCode = async() => {
        const response = await fetch('/api/checkCode',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, email, code }),
        });
        const data = await response.json();
        if(data.status === 200){
            redirect('/home');
        }
    }
    const resetCode = () => {
        dispatch(setCodeSent(false));
        setUser('');
        setEmail('');
        setCode('');
    };


    return (
        <div id="loginPage" className="mainContainer">
            <div className="backgroundAnimated"></div>
            {/* <div className="icon-all"><ui.Icon icon={Icons.all}/></div> */}
            <div className="loginPage-content">
                <div className="loginPage-rightColumn">
                        {codeSent === false ? 
                        <div className="loginPage-rightColumn-content">
                            <h3 className="loginPage-title">Ingreso</h3>
                            <div className="loginPage-inputContainer">
                                <ui.InputText  placeholder='Usuario' id="user" icon={Icons.user}/>
                                <ui.InputText  placeholder='Email' id="email" icon={Icons.email}/>
                            </div>
                            <div className="loginPage-buttonContainer">
                                <ui.Link href="/SingUp">Crear Usuario</ui.Link>
                                <ui.Button label="Enviar código" backgroundColor={LibraryType.All} onClick={() => sendCode()}/>
                            </div>
                        </div>
                        : 
                        <div className="loginPage-rightColumn-content">
                            <h3 className="loginPage-title">Ingreso</h3>
                            <div className="loginPage-inputContainer">
                                <ui.InputText  placeholder='Código' id="code" icon={Icons.passwd}/>
                            </div>
                            <div className="loginPage-buttonContainer">
                                <ui.Link href="#" onClick={() => resetCode()}>Cancelar</ui.Link>
                                <ui.Button label="Ingresar" backgroundColor={LibraryType.All} onClick={() => checkCode()}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

