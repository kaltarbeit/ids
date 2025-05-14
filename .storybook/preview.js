/** @type { import('@storybook/html').Preview } */

import '../styles/src/ids.css';
import '../patterns/global.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
