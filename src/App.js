import React, {useState} from 'react';
import {Time} from "./components/Time";
import {Place} from "./components/Place";
import {Action} from "./components/Action";
import {Button} from "./components/Button";

function App() {
    const [times,] = useState([
        30, 60, 90, 120
    ]);
    const [places,] = useState([
        "Попку", "Член", "Грудь", "Шею", "Губы"
    ]);
    const [actions,] = useState([
        "Поцеловать", "Облизать", "Кусать"
    ]);
    const [chosenTime, setChosenTime] = useState(0);
    const [chosenPlace, setChosenPlace] = useState("Hot");
    const [chosenAction, setChosenAction] = useState("Hot");

    const [chosenTimeSecond, setChosenTimeSecond] = useState(0);
    const [chosenPlaceSecond, setChosenPlaceSecond] = useState("Hot");
    const [chosenActionSecond, setChosenActionSecond] = useState("Hot");

    const playFirst = () => {
        setChosenTime(times[Math.floor(Math.random() * times.length)]);
        setChosenPlace(places[Math.floor(Math.random() * places.length)]);
        setChosenAction(actions[Math.floor(Math.random() * actions.length)]);
    }

    const playSecond = () => {
        setChosenTimeSecond(times[Math.floor(Math.random() * times.length)]);
        setChosenPlaceSecond(places[Math.floor(Math.random() * places.length)]);
        setChosenActionSecond(actions[Math.floor(Math.random() * actions.length)]);
    }
    return (
        <>
            <div style={{marginTop: "20px"}} className="container">
                <Time chosenTime={chosenTime}/>
                <div className={"main-container"}>
                    <Place chosenPlace={chosenPlace}/>

                    <Action chosenAction={chosenAction}/>
                </div>
                <Button play={playFirst}/>
            </div>

            <div style={{borderTop: "1px solid #0000002e", paddingTop: '30px', marginTop: "30px"}} className="container">
                <Time chosenTime={chosenTimeSecond}/>
                <div className={"main-container"}>
                    <Place chosenPlace={chosenPlaceSecond}/>
                    <Action chosenAction={chosenActionSecond}/>
                </div>
                <Button play={playSecond}/>
            </div>
        </>
    );
}

export default App;
