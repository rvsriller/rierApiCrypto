// API key compose variable

let apiKey = { key: 'Add your personal key here' };

//GET | fetch Requisition using promises
fetch(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apiKey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error('Unsuccessful requisition, status ' + response.status);
    return response.json();
  })

  
  //Response | return json object
  .then((api) => {

    let info = "";
    
    // Get 10 coins and symbols
    for(let i = 0; i < 10 ; i++){
      

      //Show API info
      info = info + `
        <div class="media">
          <img 
            src="coin.jpg" 
            class="align-self-center mr-3" 
            alt="coin" 
            width="100" 
            height="60" 
          />

          <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            <p>${api.data[i].first_historical_data}</p>
          </div>
        </div>
      `;

      //Add to html page
      document.getElementById("coins").innerHTML = texto;
      
    }
  })

  //Error | return error
  .catch((error) => {
    //error message
    console.error(error.message);
  });





  