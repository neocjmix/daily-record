import React from 'react'
import { render } from 'react-dom'
import { inject, Provider } from 'mobx-react'
import { configure, observable } from 'mobx'
import DevTools from 'mobx-react-devtools'
import properties from 'properties'

configure({ enforceActions: 'always' })

const store = observable({
  name: 'World',
})

const HelloWorld = inject('store')(() => <div>Hello, {store.name}!</div>)

const App = () =>
  <Provider store={store}>
    <>
      <HelloWorld/>
    </>
  </Provider>

render(<>
  <App/>
  {properties.env === 'development' ? <DevTools /> : ''}
</>, document.getElementById('app'))
