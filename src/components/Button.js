import React from 'react';

export const Button = ({play}) => {
    return (
        <div className={"button-container"}>
            <span onClick={play}>🔥</span>
        </div>
    );
};

