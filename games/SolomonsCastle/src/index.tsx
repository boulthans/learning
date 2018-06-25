import React from 'react';
import { render as renderDom } from 'react-dom';

import PlayerStats from './components/PlayerStats';
import Player from './js/types/Player';


const myPlayer: Player = {
    health: 75,
    hunger: 0,
    maximumHealth: 100,
    maximumStamina: 100,
    stamina: 100
};

renderDom(
    <div style={{
        boxSizing: 'border-box'
    }}>
        <PlayerStats currentHealth={myPlayer.health} currentStamina={myPlayer.stamina} />
    </div>,
    document.getElementById('root')
);