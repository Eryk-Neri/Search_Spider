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
    
    const Correcao = readlineSync.keyInYN('Deseja corrigir a sua pesquisa para "'+ await element?.evaluate(el => el.innerText) + '"?');
      Verificacao = (Correcao.toUpperCase()=='S'||Correcao.toUpperCase()=='N');

      if(Correcao){
        await page.click('#fprsl');
      }
  } catch (error) {
  }

  const Data = await page.evaluate(()=>{
    
    //Gets all linked elements from the page | Pega todos os elementos com link da página
    let allElments = document.querySelectorAll('[jscontroller=SC7lYd]');
    arr = [];

    //extracts the title and link of each element found | extrai o titulo e o link de cada elemento encontrado
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
  const index = readlineSync.keyInSelect(Data.map((item)=>{return item.Title +" link: "+ item.Link}), 'Qual site?');
  console.log('Site Selecionado: '+Data[index].Title +" link:"+ Data[index].Link);

  //open the selected link and wait for the page to load | abra o link selecionado e espere a página carregar
  await page.goto(Data[index].Link, { waitUntil: 'domcontentloaded' });

  // Screenshot | Captura de tela
  await page.screenshot({path: 'output.png', fullPage: true});  

  //close the browser | feche o navegador
  await browser.close();
})();