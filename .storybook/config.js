import { configure, addDecorator, addParameters } from "@storybook/react";
import  { withKnobs } from "@storybook/addon-knobs"
import { withInfo } from '@storybook/addon-info';

import { create } from "@storybook/theming"

const Theme=create({
  base:'light',
  brandTitle: "react-strix",
  brandUrl: "https://github.com/straxico/react-strix",
})

addParameters({
  options: {
    panelPosition: 'bottom',
    theme: Theme,

  }
});

addDecorator(withKnobs);
addDecorator(
  withInfo({
    inline: true,
    source: true,
    header:true,
  })
);

function loadStories() {
  const req = require.context('../src/Components', true, /\.stories\.js|tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);