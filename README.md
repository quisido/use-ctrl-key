# useCtrlKey [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20to%20Ctrl%20key%20events%20with%20React%20hooks&url=https://github.com/CharlesStover/use-ctrl-key&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-ctrl-key.svg)](https://www.npmjs.com/package/use-ctrl-key) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-ctrl-key.svg)](https://www.npmjs.com/package/use-ctrl-key) [![downloads](https://img.shields.io/npm/dt/use-ctrl-key.svg)](https://www.npmjs.com/package/use-ctrl-key) [![build](https://api.travis-ci.com/CharlesStover/use-ctrl-key.svg)](https://travis-ci.com/CharlesStover/use-ctrl-key/)

Listen to Ctrl key events with React hooks.

- [Install](#install)
- [Use](#use)
- [Sponsor](#sponsor)

## Install

- `npm install use-ctrl-key` or
- `yarn add use-ctrl-key`

## Use

```javascript
import useCtrlKey from 'use-ctrl-key';

function App() {
  const ctrlKey = useCtrlKey();
  return <p>The Ctrl key is {ctrlKey ? 'pressed' : 'not pressed'}.</p>;
}
```

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
