# Front-End Fasiclin
Projeto desenvolvido com as tecnologias para código:
* React
* TypeScript

E para formatação do código: 
* ESLint
* Prettier

## Setup
* Clonando o Repositório
> Para clonar o repositório você precisa de uma pasta vazia em seu computador.

Na sua pasta de escolha execute a seguinte linha de comando no CMD: 
```
git clone https://github.com/adsunifasipe/fasiclin-frontend.git
```
> Após clonado o repositório pela primeira vez, execute no terminal o comando `npm install`, para instalar todas as dependências do projeto.

> [!IMPORTANT]
> Somente quando o repositório for clonado pela primeira vez!

> [!CAUTION]
> Não altere os arquivos que estão abaixo da pasta **src**

## Prettier
Para utilizar o prettier da maneira correta, é necessário que você tenha a extensão do Prettier instalada no seu VSCODE

Após a instalação da extenção, abra as configurações do seu vscode apertando as teclas `ctrl` + `shift` + `p` em seu teclado
e digite `Open User Settings` e selecione a versão `JSON`.

Adicione as seguintes linhas: 
```json
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }
```
