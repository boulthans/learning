import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export interface StaminaBarProps {
    readonly className?: string;
    readonly current: number;
    readonly maximum: number;
}

export const StaminaBar: React.StatelessComponent<StaminaBarProps> = ({ className, current, maximum }) =>
    <div>
        {/* <p className="spaced-bottom--none">Stamina:</p> */}
        <ResourceBar barColour="#fcec03" className={className} current={current} maximum={maximum} />
    </div>