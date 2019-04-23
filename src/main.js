var req = new XMLHttpRequest();
req.open('GET', 'http://www.omdbapi.com/?apikey=202de9b6&s=spider-man', false); 
req.send(null);
if(req.status == 0)
  dump(req.responseText);
  let result = JSON.parse(req.responseText).Search;
  result.forEach(element => {
      console.log(element.Poster);
  });


  let movie = document.getElementById('movie');

  

//   result.forEach(element => {
//     img.src=(element.Poster);
// });

 
 
 
//   <img src="element.Poster"></img>
//   <img src=""></img>
//   <img src=""></img>
