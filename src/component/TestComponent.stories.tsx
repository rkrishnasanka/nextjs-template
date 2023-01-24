import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestComponent } from "./TestComponent";

export default {
    title: "Example/TestComponent",
    component: TestComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
} as ComponentMeta<typeof TestComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestComponent> = (args) => <TestComponent />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};
