import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewNewButton } from './NewNewButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NewNewButton',
  component: NewNewButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NewNewButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewNewButton> = (args) => <NewNewButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'NewButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'NewButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'NewButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'NewButton',
};
