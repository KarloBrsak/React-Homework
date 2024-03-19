//? Да се креираат 4 users со атрибути {ime, prezime, adresa, godini} во App.jsx, дефинирани како варијабли.
//? Користејќи пропс во 2 посебна фајла, ќе се префрлат users во еден file (Age.jsx), ќе ги прикажете тие кои се постари од 18 години. А за останатите ќе се прикаже параграф "Less than 18".
//? Во другиот фајл (Address.jsx) ќе се прикажат тие што имаат адреса Скопје

import React from 'react';
import { Age } from './components/Age';
import { Address } from './components/Address';

export function App() {
  let users = [
    {
      ime: 'Karlo',
      prezime: 'Brsak Krsteski',
      adresa: 'Skopje',
      godini: 30,
    },
    {
      ime: 'Mali',
      prezime: 'Maliot',
      adresa: 'Skopje',
      godini: 12,
    },
    {
      ime: 'Ramko',
      prezime: 'Ramkovski',
      adresa: 'Ramkovland',
      godini: 55,
    },
    {
      ime: 'Carl',
      prezime: 'Johnson',
      adresa: 'Los Santos',
      godini: 25,
    },
  ];

  return (
    <div>
      <p>Homework 2</p>
      <Age lugje={users} />
      <Address lugje={users} />
    </div>
  );
}
