
function Vugar() {
  return new Promise((resolve,reject)=>{
    var req = new XMLHttpRequest();
    req.open('GET', 'http://www.omdbapi.com/?&apikey=202de9b6&s=spider-man', false);
    req.send(null);
    if(req.status!=200) ()=>reject(()=>console.log("Что-то не то"));
    let result = JSON.parse(req.responseText).Search;
    resolve(result);
    console.log(result);
  });
}

 // var req = new XMLHttpRequest();
  // req.open('GET', 'http://www.omdbapi.com/?&apikey=202de9b6&s=spider-man', false);
  // req.send(null);
  // if (req.status == 200) {

  //   let result = JSON.parse(req.responseText).Search;

  //   //resolve(result.Search);
  //   result.forEach(element => {
  //     console.log(element.Poster);
  //   });


  // }

// let movie = document.getElementById('movie');

function render(movieList) {
  let movie = document.getElementById('movies');
  movieList.forEach(item => {
    let img = document.createElement('img');
    img.src = item.Poster;
    movie.appendChild(img);
  });
}

Vugar()
  .then(result=>render(result))
  .catch(e => console.log(e));
//   result.forEach(element => {
//     img.src=(element.Poster);
// });




  // <img src="element.Poster"></img>
  // <img src=" "></img>
  // <img src=""></img>

