import React from 'react'

export default class Result extends React.Component{
  render(){
    return(
      <div className="movies-container">
        <div className="jumbotron col-sm-12 text-center">
          <h1>
            <a onClick={this.props.onSearchToggle}>
            React OMDB
            </a>
          </h1>
        </div>
        {this.props.movies
          .map((movie,i)=>{
            return(
              <div key={i}>
                <img
                src={movie.Poster}
                className="img-thumbnail"
                />
                <p>{movie.Title}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

