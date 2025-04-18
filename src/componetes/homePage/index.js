import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function App() {
  const [personagens, setPersonagens] = useState([]);
  const [karts, setKarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        // Faz todas as requisições em paralelo
        const [resPersonagens, resKarts] = await Promise.all([
          api.get('characters'), // esse endpoint vira: http://localhost:3000/characters → que o proxy redireciona
          api.get('karts')
        ]);

        setPersonagens(resPersonagens.data.characters);
        setKarts(resKarts.data.karts);
        
      } catch(erro) {
        console.error("Erro ao carregar dados:", erro.response?.status, erro.message);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  if (loading) {
    return <div className="loading">Carregando dados...</div>;
  }

  //Renderizando na tela:
  return (
    <div className="App">
      <h1>Mario Kart API</h1>
      
      <section>
        <h2>Personagens ({personagens.length})</h2>
        <div className="grid-container">
          {personagens.map((personagem) => (
            <div key={personagem.id} className="card">
              <img src={personagem.image} alt={personagem.name} />
              <h3>{personagem.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Karts ({karts.length})</h2>
        <div className="grid-container">
          {karts.map((kart) => (
            <div key={kart.id} className="card">
              <img src={kart.image} alt={kart.name} />
              <h3>{kart.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}