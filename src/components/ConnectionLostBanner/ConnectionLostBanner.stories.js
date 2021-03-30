import React from 'react';
import { ConnectionLostBanner } from './ConnectionLostBanner';

export default {
  title: 'ConnectionLostBanner',
  component: ConnectionLostBanner,
};

export const Default = (args) => <ConnectionLostBanner {...args} />;
Default.args = {};
