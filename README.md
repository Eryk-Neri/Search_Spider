# Searh Spider 🕷️🔍

> EN-US

> Search Spider is a **[Node.js](https://nodejs.org/en)** project that uses **[Puppeteer](https://pptr.dev)** and **[Readline-sync](https://www.npmjs.com/package/readline-sync)** to allow users to perform web searches and take screenshots of selected web pages.

> PT-BR

> O Search Spider é um projeto em **[Node.js](https://nodejs.org/en)** que utiliza **[Puppeteer](https://pptr.dev)** e **[Readline-sync](https://www.npmjs.com/package/readline-sync)**  para permitir aos usuários realizar buscas na web e obter screenshots de páginas da web selecionadas.

### 📋 Prerequisites | Pré-requisitos

> EN-US

> Have **[Node.js](https://nodejs.org/en)** downloaded on your machine

> PT-BR

> Tenha o **[Node.js](https://nodejs.org/en)** abaixado na sua maquina


## 🚀 Starting | Começando

> EN-US

> After downloading **[Node.js](https://nodejs.org/en)** on your machine, make a git clone of the project

- Open Git Bash.
- Change the current working directory to the location where you want to have the directory cloned.
- Type git clone and paste the already copied URL.

```bash
git clone https://github.com/Eryk-Neri/Search_Spider.git
```

> PT-BR

>Após baixar o **[Node.js](https://nodejs.org/en)** em sua máquina, faça um clone git do projeto

- Abra Git Bash.

- Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.

- Digite git clone e cole a URL já copiada.


```bash
git clone https://github.com/Eryk-Neri/Search_Spider.git
```

## ⚙️ Running | Executando 

> EN-US

> After doing git clone, with the terminal open, run index.js

```Terminal
Node index.js
```

> Soon after, the program will ask what the Search will be

```Terminal
Pesquisa:

Ex:
Pesquisa: Dev
```

After informing the search source, the program will return a menu of the links that the program found

```Terminal
[1] DEV Community link: https://dev.to/
[2] DevMedia | Learn to Really Program Method link: https://www.devmedia.com.br/
...
[0] CANCEL

Selecione um site? [1, 2, ..., 0]:
```

After selecting one of the options, the program will save a complete print of the page in the directory

> PT-BR

> Após ter feito git clone, com o terminal aberto, execute index.js

```Terminal
Node index.js
```

> Logo em seguida o programa ira perguntar qual sera a Pesquisa

```Terminal
Pesquisa:

Ex:
Pesquisa: Dev
```

Depois de informar a fonte de pesquisa o programa ira retorna um menu dos link que o programa achou 

```Terminal
[1] DEV Community link: https://dev.to/
[2] DevMedia | Método Aprenda a Programar de Verdade link: https://www.devmedia.com.br/
...
[0] CANCEL

Selecione um site? [1, 2, ..., 0]:
```

Depois de selecionar uma das opções o programa irar salvar um print completo da pagina no diretorio 
