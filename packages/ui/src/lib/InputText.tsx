import React from 'react';
import './InputText.css';
import { LibraryType, Icons} from '@biblioteca-personal/shared-types';
import Icon from './Icon';


type InputTextProps = {
    id: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder: string;
    libraryType?: LibraryType;
    icon?: Icons;
}

const InputText: React.FC<InputTextProps> = ({ id,value, onChange, placeholder, libraryType, icon}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
    }
    return (
        <div className="inputTextContainer">
            {icon && <Icon icon={icon}/>}
            <input className={`inputText ${libraryType}`}
                    type="text"
                    id={id}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
            />
        </div>
    );
}   

export default InputText;