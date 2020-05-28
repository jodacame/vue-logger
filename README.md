TODO: Improve documentation

## Features

- Memory usage
- File path 
- Colorized 
- Time execution 
- Very light 3kb

## Installation 

Install from github for now

```bash
npm i https://github.com/jodacame/vue-logger.git
```

## Nuxt Usage

Create file into plugins folder  ***plugins/logger.js*** and put the next code:

```js
import Vue from 'vue'
import logger from 'vue-logger'
Vue.prototype.$log = logger
```

Edit your ***nuxt.config.js*** file and load the plugin like this:

```
plugins: [
    { src: '~/plugins/logger' }
]
```
## Usage

Only available in client mode

```js
// Debug
this.$log.debug(`Hi I'am a Debug`)
// Error
this.$log.error(`Hi I'am a Error`)
// Warning
this.$log.warning(`Hi I'am a Warning`)
// Info
this.$log.info(`Hi I'am a Info`)
// Success
this.$log.success(`Hi I'am a Success`)
```

![PREVIEW](https://raw.githubusercontent.com/jodacame/vue-logger/master/assets/preview.png)
