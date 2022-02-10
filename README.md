<h1 align="center">Welcome to Watch Later List for Globoplay 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.11-blue.svg?cacheSeconds=2592000" />
  <a href="http://localhost:3333/api/v1" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Api para simular uma lista de assistir depois para o globoplay para o desafio da globotech academy. A api tem dois endpoints: um para adicionar um filme a lista e outro para listar todos os filmes da lista.

# Rodar o projeto pelo Docker

> A aplicação pode ser rodada tanto diretamente quanto pelo docker, para rodar pelo docker basta executar os seguintes comandos:

**_Atenção: para fazer esse passo precisa do docker instalado na máquina_**

```sh
  # Criação da imagem do docker
  docker build -t watch-later-globoplay .
```

```sh
  # Rodar a imagem do docker (atentar para deixar a porta 3333 disponível)
  docker run -p 3333:3333 watch-later-globoplay
```

# Rodar o projeto localmente sem docker

## Instalar as dependências

```sh
# Instalar as dependências
npm install
```

## Rodar em modo desenvolvimento:

```sh
npm run start:dev
```

## Rodar build para produção:

```sh
# Buildar o projeto
npm run build

# Rodar os arquivos buildados
npm run start:prod
```

# Rodar os testes

## Pelo Docker

```sh
# Buscar o nome ou id do container com docker ps
docker exec -it <name_container> /bin/bash

# Rodar os testes no container
npm run test
```

## Localmente sem docker

```sh
npm run test
```

## Author

👤 **Samuel Santos**

- Website: https://www.linkedin.com/in/samuel-santos-036375174/
- Github: [@samuelLimaSantos](https://github.com/samuelLimaSantos)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/samuel-santos-036375174\/](https://linkedin.com/in/https://www.linkedin.com/in/samuel-santos-036375174/)
