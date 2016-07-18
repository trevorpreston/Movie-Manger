import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search.jsx'
import queryOMDB from '../helpers/ajaxAdapter.js'
import Results from './Results.jsx'

export default class SearchContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      query:"",
      searched: false,
      results:[]
    }
  }
  handleUpdateSearch(event) {
    this.setState({
      query: event.target.value
    })
  }
  handleSubmitSearch(event) {
    event.preventDefault();
    queryOMDB(this.state.query).then( movies => {
      // console.log(movies)
      this.setState({
        results: movies.Search,
        query: '',
        searched: true
      })
    // console.log(this.state)
    })

  }
  handleSearchToggle(event){
    this.setState({searched: !this.state.searched})
  }
  render(){
    if(this.state.searched){
      return(
        <Results movies={this.state.results} onSearchToggle={this.handleSearchToggle.bind(this)} />
      )
    }
    return(
      <div className="container">
        <Search
        onUpdateSearch={this.handleUpdateSearch.bind(this)}
        onSubmitSearch={this.handleSubmitSearch.bind(this)}
        query={this.state.query}/>
      </div>

    )
  }
}
