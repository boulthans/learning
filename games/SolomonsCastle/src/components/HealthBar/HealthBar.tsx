import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export interface HealthBarProps {
    readonly current: number;
    readonly maximum: number;
}

export const HealthBar: React.StatelessComponent<HealthBarProps> = ({ current, maximum }) =>
    <div>
        <p>Health:</p>
        <ResourceBar barColour="#d70000" current={current} maximum={maximum} />
    </div>