import classnames from 'classnames';
import React from 'react';


export interface ResourceBarProps {
    readonly barColour: string;
    readonly className?: string;
    readonly current: number;
    readonly maximum: number;
}

export const ResourceBar: React.StatelessComponent<ResourceBarProps> = ({ barColour, className, current, maximum }) =>
    <div className={classnames('rounded', className)}
         style={{
        backgroundColor: 'lightgrey',
        display: 'flex',
        position: 'relative'
    }}>
        <div className="rounded"
             style={{
            backgroundColor: barColour,
            flexBasis: `${(current / maximum) * 100}%`,
            height: '18px'
        }}/>

        <span className="text--bold color--grey--7" style={{
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            {`${current}/${maximum}`}
        </span>
    </div>