import axios from "axios";

const api = axios.create(
    {
        baseURL:'/api/v1' // a partir de agora, o React vai proxyar para https://mario-kart-api.herokuapp.com
    }
);

export default api;

// Essa API não está configurada para aceitar requisições vindas do meu front-end. O servidor dela não está enviando o cabeçalho, Então o navegador bloqueia por segurança. Por isso , eu preciso configurar o proxy no meu package.json para fazer a requisição.