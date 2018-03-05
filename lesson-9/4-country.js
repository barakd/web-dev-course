const country = 'israel';

function askNews() {
    console.log('what are the news at ' + country + ' ?');
}

function flyToCountry(country) {
    console.log('flying to ' + country);
    askNews();
}
askNews();
flyToCountry('new zeland');
askNews();
