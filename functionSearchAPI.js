// function som utför en sökfunktion på en API. I denna ex. är det name vi vill ha bara.
async function fetchdata(searchTerm) {
    const response = await fetch(`https://api.example.com/search?name${searchTerm}`);
    const data = await response.json();
    return data;
}

//returnera förslag
function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById('suggestionList');
    suggestionList.innerHTML = ''; //rensar föregående sökning

    //visar nya förslag.
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestions.name;
        suggestionList.appendChild(listItem);
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