import React from 'react';
import { ReactComponent as Logo} from '../Infinity-1s-200px.svg';

export const Preloader = () => {
    return (
        <div>
            <Logo style={{backgroundColor: "#272727", height: "50px", width: "50px", color: "#fff" }}/>
        </div>
    );
};

