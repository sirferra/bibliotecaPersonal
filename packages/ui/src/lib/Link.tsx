import React from 'react';
import './Link.css';

interface LinkProps {
    href : string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Link:React.FC<LinkProps> = ({href, children, onClick}) => {
    return (
        <a href={href} className='link' onClick={onClick}>{children}</a>
    )
}
export default Link