# LIVEN
## Projeto liven

O projeto desenvolvido é um ecommerce, em que é possível ter acesso a uma lista de produtos, filtrar por categorias e adicionar/remover items no carrinho de compra e adicionar/remover quantidade de items no carrinho.
Para exibir os produtos faço uso da API fakestoreapi que retorna uma lista de produtos, como também uma lista de categorias diponível, também nela é possível ter acesso as rotas do carrinho.
O projeto é 100% responsivo, ou seja, se adequa à tela de qualquer dispositivo mobile..
A versão final do projeto pode ser consultada através desse link: <https://liven-ecommerce.herokuapp.com/>

## Stack
Neste projeto frontend foi utilizado as seguintes tecnologias:
- Next JS
- React Hooks
- Styled-Components
- Typescript
- Testes unitários

## Fluxo da aplicação

- 1 - A página inical já é a tela dos produtos, essa requisição que exibe todos os produtos é utlizando o SSR do NEXT, ou seja, renderização do lado do servidor, prática que melhora a performace da aplicação.
- 2 - É possível o usuário filtrar os produtos por categoira, clicando em algumas das categorias exibidas como menu.
- 3 - O usuário pode clicar em qualquer produto para adicioná-lo ao carrinho. 
- 4 - Após clicar o usuário clicar em adicionar no carrinho o mesmo produto é exibido na tela de carrinho e o valor do carrinho já é atualizado imediatamente.
- 5 - Um produto adionado no carrinho pode ser removido ou atualizado, sendo permitido ao usuário adicionar quantos items queira.
- 6 - É permitido também remover todos os itens do carrinho de uma única vez.


## Observação

- Infelizmente a API fakestoreapi  não persiste as informações que são enviadas, ou seja, os carrinhos criados não são salvos no banco de dados deles, e essa condição fez com que eu fizesse uma adaptação na estrutura do projeto. Eu salvo essas informações do carrinho localmente, em tempo de aplicação, ou seja, até o momento que a página não é recarregada. Essa situação poederia facilmente ser revestida se a API fakestoreapi salvasse as informações.


## Estrutura
Todo o código desenvolvido foi projetado e pensado para ser o máximo possível - legível, compactado, eficiente, escalável e desacoplado.
Todo o layout foi desenvolvido utilizando as medias query do CSS, permitindo assim que seja responsível e se adeque à diferentes telas e diferentes resoluções.
As pastas e seus conteúdo são bem definidas e intuitivas.
- (components) - Nessa pasta fica os componentes que podem ser usados em diferentes telas.
- (containers) - Nesta pasta fica as páginas da aplicação.
- (functions) - Nesta pasta funções que são usadas, funções de cálculo, formatação, etc.
- (hooks) - Nesta pasta fica os hooks, que são os gerenciadores de estados da aplicação, todos os gerenciados são visíveis em toda a aplicação.
- (layout) - Nesta pasta fica os componentes do cabeçalho e rodapé (Header e Footer).
- (pages) - Está é a principal pasta do projeto, a pasta raiz, ela é a página de acesso do sistema e dentro dela tem outra pasta chamada <api>, que faz as chamadas para a API do fakestoreapi.
- (services) - Nesta pasta crio uma instância do Axios para fazer requisições HTTPS.
- (_tests_) - Nesta pasta é usados os testes implementados.

## Testes

Os testes desenvolvidos são testes unitários, usando o framwork JEST.

## Instação Frontend

É necessário ter instalado o [Node.js](https://nodejs.org/) v12+ ou superior para executar.

Crie  o arquivo .env.local para ter acesso a API fakestoreapi.

```sh
Adicione esta linha
NEXT_PUBLIC_API_URL=https://fakestoreapi.com/
```
Instale as dependências, gere o build e inicie o servidor.

```sh
npm install ou yarn install
npm run build ou yarn build
npm run start ou yarn start
```

Para realizar os testes:

```sh
npm run test ou yarn test
```
> A aplicação irá funcionar na poarta 3000.
> O usuário pode acessar a aplicação acessando: http://localhost:3000
> Site em produção <https://liven-ecommerce.herokuapp.com/>



## Autor

Projeto desenvolvido inteiramente por mim, Renato Barros de Lima

**Free Software!**

