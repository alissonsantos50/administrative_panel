![Administrative Panel](https://github.com/alissonsantos50/administrative_panel/blob/master/frontend/src/assets/mockup.png?raw=true)

## Sobre o Projeto

Painel administrativo para incluir, listar, editar e excluir clientes.

### Feito Com

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com)


## Começando

Para rodar este projeto, clone o repositório e siga os passos abaixo:

### Pré-requisitos

- PHP
- MySQL
- Composer
- Yarn

### Instalação

##### Backend

Crie o banco importando o arquivo:

`api/src/Config/kabum.sql`

Configure os dados do MySQL, editando o arquivo:

`api/src/Config/DatabaseConnection.php`

Instale as dependências:

`composer install`

Após instalar as dependências, inicie o servidor:

`php -S localhost:8080 public/index.php`

##### Frontend

No diretório do frontend:

`yarn`

Após instalação das dependências, execute:

`yarn start`

Para acessar o painel, utilize o usuário e senha:

`Usuário: admin`
`Senha: admin`
