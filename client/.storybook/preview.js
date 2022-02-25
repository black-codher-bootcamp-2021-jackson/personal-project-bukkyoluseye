import '../src/styles/App.css';
import '../src/styles/ColourPalette.css';
import '../src/styles/CalendarStyles.css';
import '../src/styles/Messages.css';
import '../src/styles/NavBar.css';
import '../src/styles/Tabs.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
