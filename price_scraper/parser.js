const nightmare = require("nightmare")()

checkPrice()


async function checkPrice() {
  
    const priceString = await nightmare.goto("https://www.amazon.de/gp/product/B006Z1BIFE")
                                       .wait("#a-price-whole")
                                       .evaluate(() => document.getElementsByClassName(a-price-whole).innerText)
                                       .end()

    const priceNumber = parseFloat(priceString.replace('€', ''))


    if (priceNumber < 20) {
      console.log("cheap")
      console.log(priceNumber)
    } else{
        console.log("expensive")
        console.log(priceNumber)
    }

}
