import { inject } from 'mobx-react'
import React from 'react'
import './HelloWorld.scss'

export default inject('store')(({ store }) =>
  <div className="hello-world">
    Hello, <span className="name">{store.name}</span>!
  </div>)
