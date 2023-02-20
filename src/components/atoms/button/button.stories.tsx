import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['light', 'dark', 'white', 'primary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Hello',
  color: 'white',
  outline: false,
  rounded: false,
  sm: false,
};
