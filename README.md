# express-api

Este repositório contém um exemplo simples e básico de como criar uma API utilizando o framework Express em Node.js. Com esta API, é possível definir rotas comuns, rotas com parâmetros e renderizar uma pasta com arquivos na própria API.
> Este código é voltado para quem não possui muita experiência com express e nodejs. Para obter um exemplo mais avançado e com outros métodos de requisição visite: https://github.com/IK-R-S/RESTful-Express-API

## Configurações

Antes de iniciar o uso deste exemplo, é necessário ter instalado o Node.js. Após a instalação, é necessário instalar as dependências utilizando o gerenciador de pacotes NPM. Para isso, basta executar o comando abaixo na pasta do projeto:

```
npm install
```

O código fonte da API está no arquivo `index.js`. Para executá-lo, basta rodar o comando abaixo na pasta do projeto:

```
node index.js
```

A API será iniciada e estará disponível em `http://localhost:3000`.

## Rotas

A API possui as seguintes rotas:

- `GET /`: Retorna uma mensagem de sucesso.

- `GET /sobre`: Retorna uma mensagem sobre a API.

- `GET /boas-vindas`: Retorna uma mensagem solicitando que o usuário escreva o seu nome na URL.

- `GET /boas-vindas/:nome`: Retorna uma mensagem de boas-vindas com o nome do usuário.

## Renderizando uma pasta com arquivos na API

A API também é capaz de renderizar uma pasta com arquivos, no caso imagens, dentro da própria API. Para isso, basta colocar os arquivos na pasta `imagens` e acessá-los pela URL `http://localhost:3000/nome_do_arquivo`.

## Conclusão

Este é um exemplo simples de como criar uma API utilizando o framework Express em Node.js. É importante ressaltar que esta é apenas uma base e que é possível criar aplicações muito mais complexas utilizando este framework.
