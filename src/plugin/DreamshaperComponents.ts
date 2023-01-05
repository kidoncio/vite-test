import type { App } from 'vue'
import { HelloWorld } from '~components/HelloWorld'

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld)
  },
}

export { HelloWorld }

// import DreamshaperComponents from 'ds-components'
// app.use(DreamshaperComponents)
// <hello-world />


// import { HelloWorld } from 'ds-components'

// <hello-world />
