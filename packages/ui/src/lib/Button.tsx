import React from 'react';
import {LibraryType} from '@biblioteca-personal/shared-types';
import  './Button.css';


interface ButtonProps {
    label: string;
    onClick: () => void;
    backgroundColor?: LibraryType;
}

const Button:React.FC<ButtonProps> = ({ label, onClick, backgroundColor}) => {
    return (  
        <button className={`btn ${backgroundColor}`}  onClick={onClick}>
            <span>{label}</span>
            {backgroundColor === LibraryType.All &&
                <div className='btn-Background'></div>
            }
        </button>
    );
    
}
export default Button;