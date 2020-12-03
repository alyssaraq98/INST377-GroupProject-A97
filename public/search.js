const endpoint = 'https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json';

const agencies = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => agencies.push(...data));

console.log(agencies);

function findMatches(wordToMatch) {
    return agencies.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        console.log()
        return place.payee_name.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value);
    console.log("i'm trying to display matches!");
    let html = [];
    if (this.value.length == 0) {
        let html = [];
    } else {
        html = matchArray.map(place => {
            return `
            <ul>
                <button>
                    <span class="name">${place.payee_name.toLowerCase()}</span><br>
                </button>
            </ul>
            `;
        }).join('');
    }
    suggestions.innerHTML = html;
    console.log("I reached the display.");
}

const searchInput = document.querySelector('.searchInput');
const suggestions = document.querySelector('.filteredList');

searchInput.addEventListener('keyup', displayMatches);