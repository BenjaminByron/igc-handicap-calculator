let dropdown = document.getElementById('glider-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Select Your Club Class Weapon';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://myjson.dit.upm.es/api/bins/1pan';

fetch(url)
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      response.json().then(function(data) {  
        let option;

        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
              option.text = data[i].type;
              option.value = data[i].type;
              dropdown.add(option);
          }    
        });  
      }  
    )  
    .catch(function(err) {  
      console.error('Fetch Error -', err);  
    });