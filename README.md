# Sistemas Distribuidos

Repositório do projeto da aula de sistemas distribuídos.

## Execução

Para executar, é necessário ter o [Docker](https://docs.docker.com/install/) e o [Docker-compose](https://docs.docker.com/compose/install/) instalados.

Para iniciar, abra a pasta `middleware` e execute:

```sh
docker-compose up
```

Da primeira vez, será necessário instalar os `node_modules`:

```sh
npm install
```

E também inserir os dados no banco de dados. Para isto, use qualquer gerenciador de MySQL e execute o script `ec021_av2_musicfy.sql`, para criar o banco e inserir os dados. A senha do banco é `root`.

Espere até que os logs do `docker-compose` se estabilizem, e acesse [localhost/index.html](http://localhost/index.html), o container Docker executando o servidor HTTP em Python irá retornar a página principal do Front-end e suas componentes.

Para encerrar a execução, aperte `Ctrl + C`.
