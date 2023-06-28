// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://demo6051079.mockable.io/xanelum-card')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Si la respuesta es una matriz, asumimos que es la estructura correcta
          setCards(data);
        } else if (data.cards && Array.isArray(data.cards)) {
          // Si la respuesta tiene una propiedad 'cards' que es una matriz, extraemos esa propiedad
          setCards(data.cards);
        } else {
          console.log('Estructura de datos inesperada en la respuesta de la API');
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="app">
      <h1>Tarjetas</h1>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.photo} alt="Foto" />
          <h2>{card.name} {card.lastName}</h2>
          <p>DNI: {card.dni}</p>
          <p>Estado Civil: {card.maritalStatus}</p>
          <p>Código Postal: {card.postalCode}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

