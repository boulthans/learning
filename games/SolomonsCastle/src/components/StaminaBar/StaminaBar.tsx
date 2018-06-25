import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export interface StaminaBarProps {
    readonly current: number;
    readonly maximum: number;
}

export const StaminaBar: React.StatelessComponent<StaminaBarProps> = ({ current, maximum }) =>
    <div>
        <p>Stamina:</p>
        <ResourceBar barColour="#fcec03" current={current} maximum={maximum} />
    </div>