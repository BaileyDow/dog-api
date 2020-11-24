/* eslint-disable strict */


let baseURL = 'https://dog.ceo/api/breed/';

function getDogImage() {
  $('form').submit(event => {
    console.log('test');
    event.preventDefault();
    let input = $(event.currentTarget).find('input').val();
    let final = `${baseURL}${input}/images/random`;
    fetch(final).then((response) => response.json())
      .then((json) => {
        console.log(json);
        let html = displayResults(json);
        $('.display').html(html);

      })
      .catch(error => alert('Something went wrong. Try again later.'));
  });

}

function displayResults(input) {
  console.log(input);
  let dogsHTML = [];

  //for (let i = 0; i < input.message.length; i++) {
    let img = input.message;

    dogsHTML.push(`<img src="${img}" width="400"></img>`);
  //}
  return dogsHTML;
  
}

function main() {
  getDogImage();
}

$(main);