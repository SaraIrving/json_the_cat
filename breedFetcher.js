const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error) {
        callback(null, data[0]);

    } else {
      callback(error, null);
    }
  });
};


module.exports = {fetchBreedDescription};