function catGoMeow(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const imageUrl = data[0].url;
        console.log('Cat image URL:', imageUrl);
        window.location.href = imageUrl;
      } else {
        console.log('No images found');
      }
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}