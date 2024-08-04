// Define the URL to fetch
const url = 'https://ww-status.thiscatlikescrypto.workers.dev/all';

// Function to fetch and decode the JSON response
async function fetchStatus() {
    try {
        // Fetch data from the URL
        const response = await fetch(url);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON response
        const data = await response.json();

        console.log(data);

        const siteElement = document.getElementById("sitestatus");
        const devElement = document.getElementById("devstatus");
        const dlElement = document.getElementById("dlstatus");
        const projElement = document.getElementById("projstatus");

        // Set innerHTML and style based on status
        siteElement.innerHTML = data['site'];
        devElement.innerHTML = data['dev'];
        dlElement.innerHTML = data['dl'];
        projElement.innerHTML = data['proj'];

        // Change text color based on status
        if (data['site'] === '200 OK') {
            siteElement.style.color = 'limegreen';
        } else {
            siteElement.style.color = 'red';
        }
        if (data['dev'] === '200 OK') {
            devElement.style.color = 'limegreen';
        } else {
            devElement.style.color = 'red';
        }
        if (data['dl'] === '200 OK') {
            dlElement.style.color = 'limegreen';
        } else {
            dlElement.style.color = 'red';
        }
        if (data['proj'] === '200 OK') {
            projElement.style.color = 'limegreen';
        } else {
            projElement.style.color = 'red';
        }

    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch and decode the status
fetchStatus();
