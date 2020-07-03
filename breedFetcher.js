const request = require('request');
//const input = process.argv.slice(2).join();
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

// request(URL, (error, response, body) => {
//   const data = JSON.parse(body);
//   if (!error) {
//     if (data[0]) {
//       console.log('The first entry is: ', data[0]);
//     } else {
//       console.log("The breed does not exist");
//     }
//   } else {
//     console.log("There was an error: ", error);
//   }
// });


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