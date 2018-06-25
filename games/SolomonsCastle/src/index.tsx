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
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: '960px'
    }}>

        <div className="background-color--blue"
             style={{
                 minHeight: '500px'
             }}>adventure text window</div>

        <div style={{
            display: 'flex'
        }}>
            <div style={{
                flexBasis: '30%'
            }}>
                <PlayerStats currentHealth={myPlayer.health} currentStamina={myPlayer.stamina} />
            </div>
            <div className="background-color--green"
                 style={{
                     flex: 1
                 }}>
                
            </div>
        </div>
        <div className="background-color--blue"
             style={{
                 minHeight: '100px'
             }}>item bar</div>
    </div>,
    document.getElementById('root')
);