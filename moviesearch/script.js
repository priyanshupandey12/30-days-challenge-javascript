const title=document.getElementById('title');
const image=document.getElementById('image');
const year=document.getElementById('year');
const search = document.getElementById('search');
const button = document.getElementById('search-btn');
const info = document.getElementById('info');
const moreInfo=document.getElementById('more-info');

const moviesearch = async (movieName) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=df80247a&t=${movieName}`); 
    
    if (!response.ok) {
      const errorText = await response.text(); // Get the error text
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    
    const data = await response.json();
    console.log(data);
    title.innerHTML=data.Title
    image.src=data.Poster
    year.innerHTML=data.Year

    moreInfo.addEventListener('click',()=>{
      info.innerHTML+=`
      <div id="info">
      <div>${data.Director}</div>
      <div>${data.Plot}</div>
      <div>${data.Genre}</div>
      <div>${data.Actors}</div>
   <div>${data.imdbRating}</div>
   <div>${data.Rated}</div>      
   </div> `
      

  })
}
   catch (error) {
    console.error('Error fetching data:', error.message);
  }





};



button.addEventListener('click', (e) => {
  e.preventDefault();
  const movieName = search.value;
  moviesearch(movieName);
  
})