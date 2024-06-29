import { ReactNode } from 'react';
import './ui.css';

type UiProps = {
  children: ReactNode;
}

export function Ui(props: UiProps) {
  return (

    <div className='page-container'>
      {props.children}
    </div>
  );
}

export default Ui;

