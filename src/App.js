import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
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
    <>
      <div className="app">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Tarjetas</h1>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.photo} alt="Foto" />
            <h2>{card.name} {card.lastName}</h2>
            <p>DNI: {card.dni}</p>
            <p>Estado Civil: {card.maritalStatus}</p>
            <p>Código Postal: {card.postalCode}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;