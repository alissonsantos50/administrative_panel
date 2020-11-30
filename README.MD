![Administrative Panel](https://github.com/alissonsantos50/crud_panel_frontend/blob/master/src/assets/mockup.png?raw=true)

## Sobre o Projeto

Painel administrativo para incluir, listar, editar e excluir clientes.

### Feito Com

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [PHP](https://www.php.net/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com)


## Começando

Para rodar este projeto, clone o repositório e siga os passos abaixo:

### Pré-requisitos

- PHP
- Composer
- Yarn

### Instalação

##### Backend

No diretório da api, configure os dados do MySQL, editando o arquivo:

`src/Config/DatabaseConnection.php`

Instale as dependências:

`composer install`

Após instalar as dependências, inicie o servidor:

`php -S localhost:8080 public/index.php`

##### Frontend

No diretório do frontend:

`yarn`

Após instalação das dependências, execute:

`yarn start`
