import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import DevTools from 'mobx-react-devtools'
import properties from 'properties'
import HelloWorldStore from './HelloWorld/HelloWorldStore'
import HelloWorld from './HelloWorld/HelloWorld'

configure({ enforceActions: 'always' })

const helloWorldStore = HelloWorldStore()

const App = () =>
  <Provider store={helloWorldStore}>
    <>
      <HelloWorld/>
    </>
  </Provider>

render(<>
  <App/>
  {properties.env === 'development' ? <DevTools/> : ''}
</>, document.getElementById('app'))
