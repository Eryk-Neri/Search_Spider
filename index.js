const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

(async () => {
  // Launch the browser and open a new blank page | Inicie o navegador e abra uma nova página em branco
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  //Search input | Entrada de pesquisa
  const query = readlineSync.question('Pesquisa:');

  // Navigate the page to a URL | Navegue na página até um URL
  await page.goto('https://www.google.com/search?q='+query);

  // Set screen size | Definir tamanho da tela
  await page.setViewport({width: 1980, height: 1024});

  // Asks if the user wants to use search correction | Pergunta se o usuário deseja usar a correção de pesquisa
  try {

    //Searches for element within 5000 milliseconds (1 seconds) | Procura elemnto dentro de 1000 milissegundos (1 segundos)
    const element = await page.waitForSelector('#fprsl', { timeout: 1000 });
    
    do{  
      const Correcao = readlineSync.question('Deseja corrigir a sua pesquisa para "'+ await element?.evaluate(el => el.innerText) + '"? [S] [N] ');
      Verificacao = (Correcao.toUpperCase()=='S'||Correcao.toUpperCase()=='N');

      if(Correcao.toUpperCase()=='S'){
        await page.click('#fprsl');
      }else if(Correcao.toUpperCase()!='N'){
        console.log('Opção invalida')
      }
      
    }while(!Verificacao);
  } catch (error) {
    console.error('Elemento não encontrado:', error);
  }

  const Data = await page.evaluate( ()=>{
    
    let allElments = document.querySelectorAll('[jscontroller=SC7lYd]');
    arr = [];

    allElments.forEach(item =>{
      let TitleSite = item.querySelector('.yuRUbf a h3');
      let URLSite = item.querySelector('.yuRUbf a');

      arr.push({
        Title : TitleSite ? TitleSite.innerText : null,
        Link : URLSite ? URLSite.href : null,
      });
    })
        
    return arr;
  });

  //Let the user choose an item from a list | Deixe o usuário escolher um item de uma lista
  const index = readlineSync.keyInSelect(Data.map((item)=>{return item.Title +" link:"+ item.Link}), 'Qual site?');
  console.log(Data[index]);

  // Screenshot | Captura de tela
  await page.screenshot({path: 'example.png', fullPage: true});
  

  await browser.close();
})();