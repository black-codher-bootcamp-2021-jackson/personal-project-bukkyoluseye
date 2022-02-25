module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-outline',
        '@storybook/addon-measure',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
