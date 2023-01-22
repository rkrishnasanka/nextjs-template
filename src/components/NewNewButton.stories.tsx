import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewNewButton } from './NewNewButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NewNewButton',
  component: NewNewButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof NewNewButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewNewButton> = () => <NewNewButton />;

export const Primary = Template.bind({});


