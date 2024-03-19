import React from 'react';

export const Age = props => {
  const postari = props.lugje.map((covek, i) => {
    if (covek.godini > 18) {
      return (
        <li key={i}>
          {covek.ime} {covek.prezime}
        </li>
      );
    }
  });
  const pomladi = props.lugje.map((covek, i) => {
    if (covek.godini < 18) {
      return (
        <li key={i}>
          {covek.ime} {covek.prezime}
        </li>
      );
    }
  });

  return (
    <div>
      <p>Lica postari od 18:</p>
      <ul>{postari}</ul>
      <p>Lica pomladi od 18:</p>
      <ul>{pomladi}</ul>
    </div>
  );
};
