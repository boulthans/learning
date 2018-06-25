import React from 'react';
import { render as renderDom } from 'react-dom';

import HealthBar from './components/HealthBar';
import StaminaBar from './components/StaminaBar';
import Player from './js/types/Player';


const myPlayer: Player = {
    health: 100,
    hunger: 0,
    maximumHealth: 100,
    maximumStamina: 100,
    stamina: 100
};

renderDom(
    <div style={{
        boxSizing: 'border-box'
    }}>
        <h1>hello Solomon</h1>

        <div className="padded--tight background-color--grey--3"
             style={{
            width: '30%'
        }}>
            <HealthBar current={myPlayer.health} maximum={myPlayer.maximumHealth} />
            <StaminaBar current={myPlayer.stamina} maximum={myPlayer.maximumStamina} />
        </div>
    </div>,
    document.getElementById('root')
);