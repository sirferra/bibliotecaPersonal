import React from 'react';
import {Icons} from '@biblioteca-personal/shared-types';
import { IconsPath } from '../index';

const Icon: React.FC<{icon: Icons}> = ({icon}) => {
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {IconsPath [icon] && 
            <img src={IconsPath[icon].default} alt={icon} />
            }
        </>
    )
}
export default Icon;