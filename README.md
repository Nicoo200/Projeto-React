# 🏎️ Mario Kart React App

Aplicação em React que consome dados da [Mario Kart API](https://mario-kart-api.herokuapp.com) para exibir personagens e karts do universo Mario Kart. Ideal para praticar consumo de API REST com React e Axios.

---

## 🚀 Tecnologias Utilizadas

- React 19
- Axios
- React Scripts
- CSS (estilização básica)

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-react.git

# Acesse o diretório
cd projeto-react

# Instale as dependências
npm install
```

### Execução

```bash
npm start
```

O projeto será iniciado em `http://localhost:3000`.

---

## 🌐 Sobre a API

Esta aplicação utiliza a [Mario Kart API](https://mario-kart-api.herokuapp.com/api/v1), criada por [JoelEncinas](https://github.com/JoelEncinas/SNES-MarioKart-API), que disponibiliza informações sobre personagens, karts e itens.

### 🔧 Endpoints disponíveis

| Rota         | Descrição                        |
|--------------|----------------------------------|
| `/characters` | Lista de personagens              |
| `/karts`      | Lista de karts                    |
| `/items`      | Lista de itens (pode estar fora do ar) |

### 📦 Exemplo de resposta de `/characters`

```json
{
  "characters": [
    {
      "id": 1,
      "name": "Mario",
      "image": "https://mario-kart-api.herokuapp.com/images/mario.png"
    },
    {
      "id": 2,
      "name": "Luigi",
      "image": "https://mario-kart-api.herokuapp.com/images/luigi.png"
    }
    // ...
  ]
}
```

---

## 📁 Estrutura de Pastas

```
src/
├── components/
│   └── homePage/
│       ├── index.js        # Componente principal
│       └── style.css       # Estilos da home
├── services/
│   └── api.js              # Configuração Axios
├── App.js                  # Componente principal do app
├── index.js                # Entry point React
```

---

## 🌍 Configuração do Proxy (para evitar CORS)

Para evitar problemas de CORS durante o desenvolvimento local, foi adicionado o seguinte proxy no `package.json`:

```json
"proxy": "https://mario-kart-api.herokuapp.com"
```

E a baseURL do Axios está configurada assim:

```js
// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1"
});

export default api;
```

Com isso, chamadas como `api.get('/characters')` são automaticamente redirecionadas para:

```
https://mario-kart-api.herokuapp.com/api/v1/characters
```

---

## 👤 Autor

Desenvolvido por [Nicollas](https://github.com/Nicoo200)

---

## 📄 Licença

Distribuído sob a licença MIT.  
Sinta-se livre para usar, modificar e distribuir este projeto.

