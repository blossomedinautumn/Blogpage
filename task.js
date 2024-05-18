console.log("from script file");

document.addEventListener('DOMContentLoaded', function() {
    // URL of the API
    const apiUrl = 'https://coding-week-2024-api.onrender.com/api/data';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        for (let i=1; i<=10; i++){
        const dataDisplay = document.getElementById(`head${i}`);
        dataDisplay.textContent = data[i-1].headline;
        const imgDisplay = document.getElementById(`img${i}`);
        imgDisplay.src = data[i-1].image;
        const dateDisplay = document.getElementById(`date${i}`);
        dateDisplay.textContent = data[i-1].date;
        }

        for(let i=1; i<=4; i++){
            const typeDisplay = document.getElementById(`type${i}`);
            typeDisplay.textContent = data[i-1].type;
        }

    })
    .catch(error => {
        for (let i=1; i<=10; i++){
        console.error('Error fetching data:', error);
        const dataDisplay = document.getElementById(`head${i}`);
        dataDisplay.innerHTML = 'Failed to load data.';
        }
    });
});
