import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export interface HealthBarProps {
    readonly className?: string;
    readonly current: number;
    readonly maximum: number;
}

export const HealthBar: React.StatelessComponent<HealthBarProps> = ({ className, current, maximum }) =>
    <div>
        {/* <p className="spaced-bottom--none">Health:</p> */}
        <ResourceBar barColour="#d70000" className={className} current={current} maximum={maximum} />
    </div>