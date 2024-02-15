// function som utför en sökfunktion på en API. I denna ex. är det name vi vill ha bara.
async function fetchData(searchTerm) {
    try {
        const response = await fetch(`https://api.example.com/search?name=${searchTerm}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

//returnera förslag
function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = ''; //rensar föregående sökning

    const infoSection = document.getElementById('infoSection');
    suggestionList.innerHTML = '';

    //visar nya förslag.
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion.name;
        listItem.dataset.suggestion = JSON.stringify(suggestion); //lagra hela objektet på listItem
        suggestionList.appendChild(listItem);
        listItem.addEventListener('click', () => {
            const suggestion = JSON.parse(listItem.dataset.suggestion);

            //skapa nya paragrafer
            const namePara = document.createElement('p');
            const cityPara = document.createElement('p');

            //sätt texten till namn och stad
            namePara.textContent = suggestion.name;
            cityPara.textContent = suggestion.city;

            //rensa infoSection och lägg till de nya paragraferna
            infoSection.innerHTML = '';
            infoSection.appendChild(namePara);
            infoSection.appendChild(cityPara);
        });
    });
}

//function genomför sökning
async function handleSearch(event) {
    const searchTerm = event.target.value.trim().toLowerCase(); //trim är en metod som tar bort tomma utrymmen före och efter en sträng.

    //kollar och sökfältet är tom
    if (searchTerm !== '') {
        try {
            const data = await fetchData(searchTerm);
            const suggestions = data.results;
            displaySuggestions(suggestions);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else { //rensar suggestions om searchTerm är tom
        const suggestionList = document.getElementById('suggestionList');
        suggestionList.innerHTML = '';
    }
}

//event listnar för input fält.
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', handleSearch)