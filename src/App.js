import React, { useState } from 'react';
import { Time } from './components/Time';
import { Place } from './components/Place';
import { Action } from './components/Action';
import { Button } from './components/Button';
import { HashRouter, Route } from 'react-router-dom';
import { ModeButton } from './components/ModeButton';
import { Quests } from './components/Quests';

function App() {
  const [times] = useState([30, 60, 90, 120]);
  const [places] = useState([
    'Губы 💋',
    'Шею',
    'Спину',
    'Грудь',
    'Живот',
    'Попу',
    'Губы',
    'Вокруг',
    'Бедра',
    'Ступни',
    'Клитор',
    'Губы',
  ]);
  const [actions] = useState([
    'Лизать',
    'Сосать',
    'Кусать',
    'Целовать',
    'Гладить',
    'Щипать',
    'Засос',
    'Вставить',
    'Смотреть',
  ]);

  const [placesTwo] = useState([
    'Губы',
    'Шею',
    'Спину',
    'Грудь',
    'Живот',
    'Попу',
    'Губы',
    'Вокруг',
    'Бедра',
    'Плечи',
    'Член',
    'Яички',
  ]);
  const [actionsTwo] = useState([
    'Лизать',
    'Сосать',
    'Кусать',
    'Целовать',
    'Гладить',
    'Щипать',
    'Засос',
    'Вставить',
    'Смотреть',
  ]);
  const [quests] = useState([
    'Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка',
    'Парень и девушка садятся рядом лицом друг к другу 6 ноги девушки сверху, и на протяжении 2 минут дрочат друг другу, в это время можно целоваться',
    'Парень две минуты облизывает, кусает, целует попку девушки',
    'Пара подходит к зеркалу и целуется на протяжении ~1 минуты',
    'Девушка на протяжении  минуты дразнит парня облизывая и целуя член, не беря его в рот',
    'Девушка на протяжении 30 секунд водит грудью по спине парня',
    'Девушка ложится на спину, парень вставляет свой член ей в рот и двигается как ему нравится',
    'Девушка садится на стул и закидывает ноги на парня. Он 2 минуты делает куни',
    'Девушка держит руки парня так, чтоб он ими не двигал, берёт член в рот и делает 9 быстрых движений и одно медленное лубже, повторяет это дважды',
    'Девушка в трусах садится на парня , лежащего на спине и двигает тазом вперёд-назад по его члену. Он в это время ласкает её соски пальцами',
    'Парень ложится на спину. Девушка водит по лицу парня своей вагиной как захочет на протяжении 2 минут',
    'Парень полторы (две) минуты ласкает, целует ступни девушки',
    'Девушка целует парня от губ до члена на протяжении 1 минуты',
    'Девушка прогибает спину и пытается полностью покласть грудь на кровать. Мужчина вводит палец или пальцы в девушку и минуту делает круговые движения внутри',
    'Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка.',
    'Девушка ложится на край кровати. Парень садится на колени перед кроватью. максимально широко раздвигает ноги девушки в шпагат и делает куни на протяжении полторы минуты',
    'Девушка на протяжении 2 минут ублажает парня рукой, всё это время они целуются',
    'Взять девушку двумя руками за грудь, и 10 раз проникнуть языком в вагину',
    'Парень ставит девушку на колени и локти, сам садится сзади, берётся за её попку и делает приятно язычком и губами',
    'Девушка ложится на живот и руками сжимает попку, а парень вставляет свой член по середине и двигается вперёд-назад',
  ]);

  const [chosenTime, setChosenTime] = useState(0);
  const [chosenPlace, setChosenPlace] = useState('Hot');
  const [chosenAction, setChosenAction] = useState('Hot');

  const [chosenTimeSecond, setChosenTimeSecond] = useState(0);
  const [chosenPlaceSecond, setChosenPlaceSecond] = useState('Hot');
  const [chosenActionSecond, setChosenActionSecond] = useState('Hot');

  const [chosenQuest, setChosenQuest] = useState('Нажми на кнопку');
  const [increment, setIncrement] = useState(0);

  const playFirst = () => {
    setChosenTime(times[Math.floor(Math.random() * times.length)]);
    setChosenPlace(places[Math.floor(Math.random() * places.length)]);
    setChosenAction(actions[Math.floor(Math.random() * actions.length)]);
  };

  const playSecond = () => {
    setChosenTimeSecond(times[Math.floor(Math.random() * times.length)]);
    setChosenPlaceSecond(placesTwo[Math.floor(Math.random() * places.length)]);
    setChosenActionSecond(
      actionsTwo[Math.floor(Math.random() * actions.length)]
    );
  };

  const [isBackground, setIsBackground] = useState(false);

  const playQuest = () => {
    if (increment >= quests.length - 1) {
      setIncrement(0);
      setChosenQuest(quests[increment]);
    } else {
      setChosenQuest(quests[increment]);
      setIncrement(increment + 1);
    }
  };
  return (
    <>
      <HashRouter>
        <Route exact path="/">
          <div className={isBackground ? 'with-background' : null}>
            <div style={{ marginTop: '-17px' }} className={'container'}>
              <Time chosenTime={chosenTime} />
              <div className={'main-container'}>
                <Place chosenPlace={chosenPlace} />

                <Action chosenAction={chosenAction} />
              </div>
              <Button play={playFirst} />
            </div>

            <div
              style={{
                borderTop: '1px solid #0000002e',
                paddingTop: '50px',
                marginBottom: '0px',
              }}
              className={
                isBackground ? 'container second-with-bg' : 'container second'
              }
            >
              <Time chosenTime={chosenTimeSecond} />
              <div className={'main-container'}>
                <Place chosenPlace={chosenPlaceSecond} />
                <Action chosenAction={chosenActionSecond} />
              </div>
              <Button play={playSecond} />
              <ModeButton />
              <div className={'bg-button-container'}>
                <span
                  className={'bg-button'}
                  onClick={() => setIsBackground(!isBackground)}
                >
                  Background
                </span>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/quests">
          <Quests playQuest={playQuest} quest={chosenQuest} />
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
