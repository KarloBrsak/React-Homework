import React from 'react';
import PropTypes from 'prop-types';

export const Movies = ({ movies }) => {
  return (
    <div id="movies">
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Plot</th>
            <th>IMDB Link</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => {
            return (
              <tr key={i}>
                <td>{movie.name}</td>
                <td>{movie.date}</td>
                <td>{movie.genre}</td>
                <td>{movie.plot}</td>
                <td>
                  <a href={movie.imdbLink}>IMDB Link</a>
                </td>
                <td>
                  <img src={movie.imgUrl} alt="film-cover" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      imdbLink: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ),
};
