import React from 'react';

export const Address = props => {
  const skopjani = props.lugje.map((covek, i) => {
    if (covek.adresa === 'Skopje') {
      return (
        <li key={i}>
          {covek.ime} {covek.prezime}
        </li>
      );
    }
    return null;
  });

  return (
    <div>
      <p>Zhiteli na Skopje:</p>
      <ul>{skopjani}</ul>
    </div>
  );
};
