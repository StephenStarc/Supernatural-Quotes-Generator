quotes = document.getElementById('quotes')
Character = document.getElementById('character')
generate = document.getElementById('generate')

// quotesgenerator = async (id) => {
//     result = await fetch('https://supernatural-quotes-api.cyclic.app/quotes/random')
//     quote = result.json()
//     console.log(quote)
// }
// quotesgenerator()


quotesgenerator = () => {
    fetch('https://supernatural-quotes-api.cyclic.app/quotes/random')
    .then(result => result.json())
    .then(quote => card(quote))
}

card = (quote) => {
    let character = quote.line_0.character.name
     console.log(character)
    let quote1 = quote.line_0.quote
    console.log(quote1);
    Character.innerText = `- ${character}`
    quotes.innerHTML = `"${quote1}"`
}


generate.addEventListener('click', quotesgenerator)
window.addEventListener('load',quotesgenerator)