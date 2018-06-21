import React from 'react';


export interface ResourceBarProps {
    readonly current: number;
    readonly maximum: number;
}

export const ResourceBar: React.StatelessComponent<ResourceBarProps> = ({ current, maximum }) =>
    <progress value={current} max={maximum} />