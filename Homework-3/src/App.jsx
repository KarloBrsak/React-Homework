//* Да се прикаже во дополнителен фајл листа од филмови (минимум 5)
//* Да се издефинира во App.jsx со атрибути {name, date, genre, plot, imdbLink, imgUrl}
//* Листата на атрибути и приказ и слика за филмот (Сликата не мора да биде од imdb)
//? Дополнително да се користат PropTypes за дефинирање на пренесените properties
//? Како бонус може да се направи и репрезентација со ѕвезди на рејтингот на филмот.

import React from 'react';
import { Movies } from './components/Movies';

export function App() {
  let movies = [
    {
      name: 'The Shawshank Redemption',
      date: '1994',
      genre: 'Drama',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      imdbLink: 'https://www.imdb.com/title/tt0111161/',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    },
    {
      name: 'Inception',
      date: '2010',
      genre: 'Sci-Fi, Action',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    },
    {
      name: 'The Dark Knight',
      date: '2008',
      genre: 'Action, Crime, Drama',
      plot: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      imdbLink: 'https://www.imdb.com/title/tt0468569/',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    },
    {
      name: 'Pulp Fiction',
      date: '1994',
      genre: 'Crime, Drama',
      plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      imdbLink: 'https://www.imdb.com/title/tt0110912/',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
    },
    {
      name: 'Interstellar',
      date: '2014',
      genre: 'Sci-Fi, Drama',
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    },
  ];

  return (
    <div id="app">
      <Movies movies={movies} />
    </div>
  );
}
