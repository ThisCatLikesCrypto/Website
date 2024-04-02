//Initalise variables
var inputValue = ""

//This is converted code from https://github.com/ThisCatLikesCrypto/GivAPI
async function get(apiKey, url, params = null) {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };

    let response;
    if (params === null) {
        response = await fetch(url, { headers: headers });
    } else {
        const queryParams = new URLSearchParams(params).toString();
        response = await fetch(`${url}?${queryParams}`, { headers: headers });
    }

    if (response.ok) { // Checks for response status codes 200-299
        try {
            const data = await response.json();
            return data['data'] ? data['data'] : data;
        } catch (error) {
            return {"error": "No data attribute. response.json() is " + JSON.stringify(await response.json())};
        }
    } else {
        // Error
        return { "error": response.status };
    }
}

async function getData(serial, apiKey) {
    const url = `https://api.givenergy.cloud/v1/inverter/${serial}/system-data/latest`;
    return await get(apiKey, url);
}

async function getDate(serial, apiKey, date) {
    const url = `https://api.givenergy.cloud/v1/inverter/${serial}/data-points/${date}`;
    return await get(apiKey, url);
}

async function getAcc(apiKey) {
    const url = 'https://api.givenergy.cloud/v1/account';
    return await get(apiKey, url);
}

async function getCom(apiKey) {
    const url = "https://api.givenergy.cloud/v1/communication-device";
    return await get(apiKey, url);
}

async function getSerial(apiKey) {
    const comData = await getCom(apiKey);
    return comData[0]['inverter']['serial'];
}

//End of converted code

function callAPI(key) {
    console.log("Calling GivEnergy API with key " + key);
    console.log(getSerial(key))
}

function submitKey() {
    inputValue = document.getElementById("keyIn").value;
    callAPI(inputValue);
}