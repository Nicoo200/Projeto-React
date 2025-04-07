import React, { useEffect, useState } from 'react';
import api from './services/api';
import './style.css';

export default function App() {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    async function carregarAlbuns() {
      try {
        const response = await api.get('searchalbum.php?s=Coldplay');
        const todosAlbuns = response.data.album?.slice(0, 4); // Pega os 4 primeiros álbuns

        // Busca as faixas de cada álbum usando o ID
        const albunsComMusicas = await Promise.all(
          todosAlbuns.map(async (album) => {
            const tracksRes = await api.get(`track.php?m=${album.idAlbum}`);
            const primeiraMusica = tracksRes.data.track?.[0]?.strTrack || 'Música não encontrada';

            return {
              nomeAlbum: album.strAlbum,
              capa: album.strAlbumThumb,
              artista: album.strArtist,
              musica: primeiraMusica
            };
          })
        );

        setAlbuns(albunsComMusicas);
      } catch (error) {
        console.error('Erro ao carregar os álbuns', error);
      }
    }

    carregarAlbuns();
  }, []);

  return (
    <div className="App">
      <h1>Álbuns de Coldplay</h1>
      <div className="albuns-container">
        {albuns.map((item, index) => (
          <div key={index} className="album-card">
            <img src={item.capa} alt={item.nomeAlbum} />
            <h3>{item.nomeAlbum}</h3>
            <p><strong>Artista:</strong> {item.artista}</p>
            <p><strong>Música:</strong> {item.musica}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
