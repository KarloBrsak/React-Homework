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
    return null;
  });

  return (
    <div>
      <p>Lica postari od 18:</p>
      <ul>{postari}</ul>
    </div>
  );
};
