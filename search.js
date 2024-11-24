let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '55368225admsh134533cfb84bf66p141fa5jsnad2c0d30cefb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
};

var allData = []
let cardsContainer = document.getElementById("cardsContainer")
cardsContainer.style.display = "flex";
cardsContainer.style.gap = "30px"
cardsContainer.style.flexWrap = "wrap"

function displayData(b) {
    cardsContainer.textContent = ""
    b.forEach(x => {
        let card = document.createElement("div")
        card.innerHTML = `
    <img src="${x.Image}"/>
    <h2>${x.Brand}</h2>
    <span>${x.Price}</span>
    `
        cardsContainer.appendChild(card)
    });
}

async function getFootWearProducts() {
    try {
        var a = await fetch(url, options)
        var b = await a.json()
        allData = b;

        searchItem(allData)
    } catch (err) {
        console.log(err);

    }
}
// getFootWearProducts()

function searchItem() {
    getFootWearProducts()
    let inputTag = document.getElementById("find").value.trim().toLowerCase();
    var filterData = allData.filter(x => x.Brand.toLowerCase().includes(inputTag));
    console.log(filterData);
    displayData(filterData)
}
