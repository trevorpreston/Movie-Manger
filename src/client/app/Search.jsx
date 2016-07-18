import React from 'react'



export default class Search extends React.Component {
  render() {
    return (
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitSearch}>
            <div className="form-group">
              <input
              onChange={this.props.onUpdateSearch}
              value={this.props.query}
              type="text"
              placeholder="Enter a movie title" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
              className ="btn btn-block btn-primary"
              type="submit">
                search
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
