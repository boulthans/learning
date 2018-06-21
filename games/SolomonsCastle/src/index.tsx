import React from 'react';
import { render as renderDom } from 'react-dom';

import Health from './components/Health';
import Player from './js/types/Player';

const myPlayer: Player = {
    health: 75,
    hunger: 0
};


renderDom(
    <div>
        <h1>hello Solomon</h1>
        <Health current={myPlayer.health} maximum={100} />
    </div>,
    document.getElementById('root')
);