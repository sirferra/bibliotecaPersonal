import React from 'react';
import * as ui from '@biblioteca-personal/ui';
import {LibraryType} from '@biblioteca-personal/shared-types';
import './LoginPage.css';

export default function LoginPage(){
    return (
        <div id="loginPage" className="mainContainer">
            <div className="loginPage-content">
                <div className="loginPage-rightColumn">
                    <div className="loginPage-rightColumn-content">
                        <h3 className="text">Ingreso</h3>
                        <img src="" alt="usericon"/><input type="text" placeholder="Usuario" />
                        <img src="" alt="emailicon"/><input type="text" placeholder="email" />
                        <div className="loginPage-buttonContainer">
                            <a href="/SingUp">Crear Usuario</a>
                            <ui.Button label="Ingresar" backgroundColor={LibraryType.All} onClick={() => console.log('holis')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}