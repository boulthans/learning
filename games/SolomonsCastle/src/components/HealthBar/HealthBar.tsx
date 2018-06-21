import React from 'react';

import ResourceBar, { ResourceBarProps } from '../ResourceBar';


export const HealthBar: React.StatelessComponent<ResourceBarProps> = ({ current, maximum }) =>
    <div>
        <p>Health:</p>
        <ResourceBar current={current} maximum={maximum} />
    </div>