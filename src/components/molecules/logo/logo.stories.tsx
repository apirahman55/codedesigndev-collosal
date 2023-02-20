import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Molecules/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
export const Base = Template.bind({});
Base.args = {};
