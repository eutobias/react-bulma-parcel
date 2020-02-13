import React from 'react'
import ReactDOM from 'react-dom'
import AddButon from './components/AddButton'

const App = props => {
  return (
    <div>
      <h1>TESTE 123</h1>
      <AddButon />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
