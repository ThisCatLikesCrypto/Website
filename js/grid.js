async function getCO2API() {
    try {
        const response = await fetch('https://api.carbonintensity.org.uk/intensity');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function get() {
    try {
      const headers = { 'Accept': 'application/json' };
      const response = await fetch('https://api.carbonintensity.org.uk/generation', { method: 'GET', headers: headers });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

function displayCO2Data(data) {
    const actual = data['actual'];
    const forecast = data['forecast'];
    const index = data['index'];
    document.getElementById('actual').innerHTML = actual;
    document.getElementById('forecast').innerHTML = forecast;
    document.getElementById('index').innerHTML = index;
}

function displayGenData(data) {
    const generationMix = data['generationmix'];

    // Map generation mix data to their respective fuel types
    const generationMap = {};
    generationMix.forEach(entry => {
        generationMap[entry['fuel']] = entry['perc'];
    });

    // Update HTML elements with the generation data
    document.getElementById('biomass').innerHTML = `Biomass: ${generationMap['biomass']}%`;
    document.getElementById('coal').innerHTML = `Coal: ${generationMap['coal']}%`;
    document.getElementById('imports').innerHTML = `Imports: ${generationMap['imports']}%`;
    document.getElementById('gas').innerHTML = `Gas: ${generationMap['gas']}%`;
    document.getElementById('nuclear').innerHTML = `Nuclear: ${generationMap['nuclear']}%`;
    document.getElementById('other').innerHTML = `Other: ${generationMap['other']}%`;
    document.getElementById('hydro').innerHTML = `Hydro: ${generationMap['hydro']}%`;
    document.getElementById('solar').innerHTML = `Solar: ${generationMap['solar']}%`;
    document.getElementById('wind').innerHTML = `Wind: ${generationMap['wind']}%`;
}


async function main() {
    const co2Data = await getCO2API();
    if (co2Data) {
        displayCO2Data(co2Data['data'][0]['intensity']);
    }
    const generationData = await get();
    console.log(generationData);
    displayGenData(generationData);

}

main();