import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export const StaminaBar: React.StatelessComponent<ResourceBarProps> = ({ current, maximum }) =>
    <div>
        <p>Stamina:</p>
        <ResourceBar barColour="#fcec03" current={current} maximum={maximum} />
    </div>