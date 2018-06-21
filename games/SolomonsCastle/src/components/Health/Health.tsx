import React from 'react';


interface Props {
    readonly current: number;
    readonly maximum: number;
}

export const Health: React.StatelessComponent<Props> = ({ current, maximum }) =>
    <div>
        <p>Health: {`${current}/${maximum}`}</p>
    </div>