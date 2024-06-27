import React from 'react';
import {LibraryType} from '@biblioteca-personal/shared-types';
import  './Button.css';


interface ButtonProps {
    label: string;
    onClick: () => void;
    backgroundColor?: LibraryType;
}

const Button:React.FC<ButtonProps> = ({ label, onClick }) => {
    return (  
        <button className="btn all" onClick={onClick}>
            {label}
        </button>
    );
    
}
export default Button;