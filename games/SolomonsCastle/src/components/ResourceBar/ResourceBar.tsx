import React from 'react';


export interface ResourceBarProps {
    readonly barColour: string;
    readonly current: number;
    readonly maximum: number;
}

export const ResourceBar: React.StatelessComponent<ResourceBarProps> = ({ barColour, current, maximum }) =>
    <div style={{
        backgroundColor: 'lightgrey',
        display: 'flex'
    }}>
        <div style={{
            backgroundColor: barColour,
            flexBasis: `${(current / maximum) * 100}%`,
            height: '14px'
        }}/>
    </div>