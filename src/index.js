import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

// Components
import Notification from './components/Notification'
import AddButon from './components/AddButton'
import ProductList from './components/ProductList'

const App = props => {
  return (
    <Fragment>
      {/* <Notification /> */}
      <AddButon />
      <ProductList />
    </Fragment>
  )
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
