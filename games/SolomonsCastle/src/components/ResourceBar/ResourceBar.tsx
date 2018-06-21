import React from 'react';


interface Props {
    readonly current: number;
    readonly maximum: number;
}

export const ResourceBar: React.StatelessComponent<Props> = ({ current, maximum }) =>
    <progress value={current} max={maximum} />