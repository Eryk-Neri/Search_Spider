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


  // Locate the full title with a unique string
  const Element = await page.waitForSelector('.MjjYud');

  const Data = await page.evaluate( ()=>{
    
    let allElments = document.querySelectorAll('.MjjYud');
    arr = [];

    allElments.forEach(item =>{
      let TitleSite = item.querySelector('.yuRUbf a h3');
      let URLSite = item.querySelector('.yuRUbf a');
      
      if(TitleSite == null){
        item.style.background = 'red';
      }

      arr.push({
        Title : TitleSite ? TitleSite.innerText : null,
        Link : URLSite ? URLSite.href : null,
      });
    })
        
    return arr;
  });
  console.log(Data);

  // Screenshot | Captura de tela
  await page.screenshot({path: 'example.png', fullPage: true});
  
  
  // Type into search box
  //await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  /*const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    '.MjjYud'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);
*/
  await browser.close();
})();