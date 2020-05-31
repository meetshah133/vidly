import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="m-4">{this.showMessage()}</h3>

          {this.renderMovies()}
        </div>
      </div>
    );
  }
  showMessage() {
    const { movies } = this.state;
    let msg = "Showing " + movies.length + " movies in the database";
    if (movies.length > 0) {
      return msg;
    } else return "";
  }

  renderMovies() {
    if (this.state.movies.length > 0) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.deleteMovie(movie)}
                      className=" btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      );
    } else return <h4> No movies available</h4>;
  }

  deleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies: movies });
  };
}
