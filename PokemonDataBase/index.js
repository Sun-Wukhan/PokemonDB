// //Get All The Pokemon Data
// // const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
// const url = "http://localhost:3000/results"

// function getPokemon(){
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => displayPokemon(data));
// }

// getPokemon(); 



// //Get all the Elements 
// const motherOfDiv = document.getElementById('pokemon-trainer-detail')

// let userName = document.querySelector('.title');

// const rosterPokemon = document.querySelector('.trainer-container')

// const pokemonList = document.querySelector('.trainer-list')

// const updateTrainerForm = document.getElementById('update-form')

// const updateForm = document.getElementById('update-form')

// const pokemonAddForm = document.getElementById('ingredient-form')


// const uL = document.querySelector('.trainer-list')

// pokemonAddForm.addEventListener('submit', function(e){
// e.preventDefault();
// console.log("Add Pokemon")

// console.log(e.target[0].value, "\n-----------")
// // console.log('_____________')
// console.log(e.target[1].value)

// const newPkmn = {name: e.target[0].value, url: "www.dznauts.com"}
// postPOkemon(newPkmn); 

// })

// updateForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log("update pokemon")
    
//     // userName.textContent = e.target[0].value

//     const updatePkmn = {name: e.target[0].value}
//     patchPOkemon(updatePkmn);
// })

// // function displayPokemon(pokeArray) {
// //     pokeArray.forEach(pkmn => {
        
// //         let li = document.createElement('li');
// //         li.textContent = pkmn.name;

// //         uL.append(li);
        
// //     })
// // }

// function displayPokemon(pokeObj) {
//     pokeObj.forEach(pkmn => {
        
//         let li = document.createElement('li');
//         li.dataset.id = pkmn.id
//         li.textContent = pkmn.name;

//         uL.append(li);
        
//     })
// }

// function displayOnePokemon(pokemObj) {
//     console.log(pokemObj)
//     let li = document.createElement('li');
//     li.textContent = pokemObj.name;

//     uL.append(li);
// }




// ///*******POST POKEMON */



// const postPOkemon = (data) => {
//     fetch("http://localhost:3000/results", {
//         method: 'POST', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       .then(response => response.json())
//       .then(data => {
//         displayOnePokemon(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       }); 
    
// }


// const patchPOkemon = (data) => {
//     fetch(`http://localhost:3000/results/${pokemon.id}`, {
//         method: 'DELETE', // or 'PUT'
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       }); 
// }

// function pokemon4(data) {
//     uL.children[3].textContent = data.name
// }


// //data ==> {name: 'name', url: 'url'}

// // const testPost = {name: 'metapod', url: '"https://pokeapi.co/api/v2/pokemon/11/"'}

// // postPOkemon(testPost)




var regex = /(<([^>]+)>)/ig
,   body = "<p>test</p>"
,   result = body.replace(regex, "");

console.log(result);