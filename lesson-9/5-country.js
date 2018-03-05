let country = 'israel';

function askNews() {
    console.log('what are the news at ' + country + ' ?');
}

function reLocateToCountry(reLocationDestnation) {
    console.log('relocating to ' + reLocationDestnation);
    country = reLocationDestnation;
    askNews();
}
askNews();
reLocateToCountry('new zeland');
askNews();
