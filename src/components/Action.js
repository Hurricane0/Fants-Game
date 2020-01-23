import React, {useEffect, useState} from 'react';
import {Preloader} from "./Preloader";

export const Action = ({chosenAction}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000);
        return () => clearTimeout(timer);
    }, [chosenAction]);
    if (isLoading) {
        return <div className={"action-place-block"}>

            <Preloader />
        </div>
    }
    return (
        <div className={"action-place-block"}>
            <span>{chosenAction}</span>
        </div>
    );
};

