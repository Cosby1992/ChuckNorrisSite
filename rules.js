

// random joke at update
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data

        
        document.getElementById('random_joke').innerHTML = data.value;
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });

var categories = [];
    // fetch categories
fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data
        categories = data;
        let dropdown = document.getElementsByClassName('dropdown-content')[0];
        for(let i = 0; i < data.length; i++){

            dropdown.innerHTML += "<a href=\"#\" onclick=\"catfetch(" + i + ")\">" + data[i] + "</a>"

        }

    })
    .catch(err => {
        console.error('An error ocurred', err);
    });

    catfetch = cat => {

    fetch('https://api.chucknorris.io/jokes/random?category=' + categories[cat])
    .then(response => response.json())
    .then(data => {
    // Do what you want with your data

    
        document.getElementById('random_joke').innerHTML = data.value;
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });

    } 
    




const search_func = () => {  

    let searchText = 'https://api.chucknorris.io/jokes/search?query=' + document.getElementById("inp_search").value;
    console.log(searchText);

    fetch(searchText)
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data

        
        document.getElementById('random_joke').innerHTML = data.result[0].value;
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });

}
