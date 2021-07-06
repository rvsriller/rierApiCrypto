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
  })

  //Response | return json object
  .then((api) => {

    let info = "";
    
  })

  //Error | return error
  .catch((error) => {
  });





  