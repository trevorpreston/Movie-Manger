// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'
import SearchContainer  from './SearchContainer.jsx'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'


// create a React Component called _App_
export default class App extends React.Component{
  render(){
    return(
    <SearchContainer />
    )
  }
}


// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
