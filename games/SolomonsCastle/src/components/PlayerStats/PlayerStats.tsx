import React from 'react';

import HealthBar from '../HealthBar';
import StaminaBar from '../StaminaBar';


interface PlayerStatsProps {
    readonly currentHealth: number;
    readonly currentStamina: number;
}

export const PlayerStats: React.StatelessComponent<PlayerStatsProps> = ({ currentHealth, currentStamina }) =>
    <div className="padded--tight background-color--grey--3"
                style={{
                width: '30%'
            }}>
            
        <HealthBar className="spaced-bottom--tight" current={currentHealth} maximum={100} />
        <StaminaBar current={currentStamina} maximum={100} />
    </div>