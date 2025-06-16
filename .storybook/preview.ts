import '../src/app/globals.css' // path to your Tailwind CSS file
import type { Preview } from '@storybook/nextjs'

const preview: Preview = {
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