# coffe-challenge

Bem Vindo à Grão Dourado, a primeira cafeteria com competição mundial com popularidade Intercontinnental, aqui você tem accessoa seleção dos melhores cafés ranqueados pelos melhores aprecisadores do  mesmo

- pokapodkaw
- pkdawdapkadw

![](./assets/rotas-preview-cooffee.gif)

## Configuração recomendada da IDE

- [VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desative o Vetur).

## Configuração recomendada do navegador

- Navegadores baseados em Chromium (Chrome, Edge, Brave, etc.):
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Ativar o Custom Object Formatter no Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Ativar o Custom Object Formatter no Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Personalizar configuração

Consulte a [Referência de Configuração do Vite](https://vite.dev/config/).

## Project Setup

1. Antes de iniciar o desenvolvimento precisamos ter a plataforma do Node em nossa máquina, por isso valide se tem o Node instalado na sua máquina, com o comando á seguir, abra seu terminal e digite:

```sh
node -v
```

1.1 Caso não tenha o Node, precisa instala-lo, lembre-se qual é o sistema operacional que usa?

- [Windows - Adote o ChocolateY]

```sh
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
```

- [Linux - Adote o NVM]()

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.5/install.sh | bash
```

Após a instalação valide, se está tudo certo, execute o comando a seguir:

```sh
node -v
```

Ele irá exibir `"v26.5.0".`

2. Faça o clone do projeto na sua máquina:

```sh
git clone https://github.com/cristofersousa/ifc-coffee-challeng-example.git
```

4. Depois acesse o diretório:

```sh
cd ifc-coffee-challeng-example
```

5. Depois instale as dependências do projeto:

```sh
npm install
```

6. Execute o projeto para ver a versão de desenvolvimento:

```sh
npm run dev
```

Ele irá executar para você com as diretrizes abaixo:

```
  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Option(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Finish!