document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://www.freecatphotoapp.com/")
        .then(response => response.json())
        .then(data => image.src = data.message)      
    }



})