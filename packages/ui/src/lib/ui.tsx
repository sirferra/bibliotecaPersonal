import { ReactNode } from 'react';
import './ui.module.scss';

type UiProps = {
  children: ReactNode;
}

export function Ui(props: UiProps) {
  return (
    <div className='container'>
      {props.children}
    </div>
  );
}

export default Ui;

