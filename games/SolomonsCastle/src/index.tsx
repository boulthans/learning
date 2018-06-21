import React from 'react';
import { render as renderDom } from 'react-dom';

import ResourceBar from './components/ResourceBar';
import Player from './js/types/Player';

const myPlayer: Player = {
    health: 20,
    hunger: 0
};


renderDom(
    <div>
        <h1>hello Solomon</h1>
        <ResourceBar current={myPlayer.health} maximum={100} />
    </div>,
    document.getElementById('root')
);