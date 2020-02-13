import React from 'react'
import ReactDOM from 'react-dom'
import AddButon from './components/AddButton'
import Navbar from './components/Navbar'

const App = props => {
  return (
    <div>
      <h1>TESTE 123</h1>
      <Navbar />
      <AddButon />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
