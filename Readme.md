<h1 align="Center"> Criando testes de API com NodeJs Jest e Express </h1>

#### Contato:<div><a href="https://www.linkedin.com/in/lucas-santos-239358132" target="_blank"><img src="https:/img.shields.io/badge-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>

Nesse projeto foi feito uma simulação de testes de API que faz: criar enpoints Seleciona, Insere, e verifica usuarios no Postman,após criado os enpoints e o database para utilizar nos testes de API, foi criado scripts de testes com as funções da ferramenta Jest.

### Linguagem:
Node.js pode ser definido como um ambiente de execução Javascript server side, ou seja tudo feito no servidor. 
Com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação sozinha em uma máquina.

aqui esta o retorno do teste no terminal:
![Terminal cenario](image.png)

### Principais bibliotecas utilizadas:
#### Jest: 
Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.
Funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais

#### Express: 
é uma biblioteca que permite validar os resultados das ações que realizamos. Nos ajuda a validar que o comportamento esperado foi obtido

#### Nodemon: 
nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js, reiniciando automaticamente o aplicativo de nó quando são detectadas alterações de arquivo no diretório.

#### SuperTeste: 
Supertest é um módulo que forja requisições visando testar webservers em Node. js e verifica o retorno das mesmas para automatizar testes deste tipo de infraestrutura, principalmente web APIs.

Tags: as tags são utilizadas para separar os funcionalidades, quando colocada na funcionalidade, será aplicada para todos os cenários existentes naquela feature. Como por exemplo o @smoke que eu coloquei ou o @regressivo para usar em um cenário de login que precisa ser testado mais vezes, quando for subir para produçao novas versões do sistema.

----------------------------------------------------------------------------------
### JEST DOCS:       https://jestjs.io/pt-BR/docs/getting-started
### SUPERTESTE DOCS: https://www.npmjs.com/package/supertest
### EXPRESS DOCS:    https://expressjs.com/pt-br/
### NODEMON DOCS:    https://www.npmjs.com/package/nodemon"# projeto-api-nodejs"  
