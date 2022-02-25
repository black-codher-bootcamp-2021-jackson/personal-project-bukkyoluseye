import React, { useState } from 'react';

import InputField from './InputField.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form/InputField',
    component: InputField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const [value, setValue] = useState('');

    return (
        <InputField
            {...args}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Search = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
    variant: 'search',
    placeholder: 'search',
    type: 'search',
};
