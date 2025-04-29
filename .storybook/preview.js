/** @type { import('@storybook/html').Preview } */

import '../docs/styles/ids2.css';
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
