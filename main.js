const API_KEY = API.KEY
console.log(API_KEY)

let API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`

IMG_PATH = 'https://image.tmdb.org/t/p/w1280' 
console.log(API_URL)

const template = document.querySelector('[data-template]')
const cardContainer = document.querySelector('.card-template')

let mini = []
const search = document.querySelector('input')



fetch(API_URL)
  .then(res => res.json())
  .then (data => {
    showMovies(data.results)})
function showMovies(data){
    data.forEach(movie =>{
      const {title, release_date, overview, vote_average, vote_count, poster_path } = movie
    // const card = template.content.cloneNode(true).children[0]
    const cardRows = document.querySelector('[card-template]')
    const card= document.createElement('div')
    
    // const cardOverview = card.querySelector('[data-card-para]')
    // const cardReleaseDate = card.querySelector('[data-card-ans]')
    // const cardImage = card.querySelector('[card-image]')
    card.innerHTML=`
    <div class='card' card>
    <img class='cardImage' src='${IMG_PATH + poster_path}'>
      <div class='cardHeader'>
      <span class='cardTitle'>${movie.title}</span>
      <div class='cardRating' style='background-color:${getColor(vote_average)}; color: white' card-rating>${movie.vote_average}</div>
      </div>
      <div class='cardDescription' style='display:none'><span>Overview</span>
      <p class='cardDescriptionText' >${movie.overview}</p></div>
      </div>
      `
      cardRows.append(card)
      // rating.style.backgroundColor =c;
      
    

    // cardHeader.textContent=movie.title
    // cardOverview.textContent=movie.overview
    // cardReleaseDate.textContent=movie.date
    // cardContainer.append(card)
    // return {title: movie.title, date: movie.date, img: movie.poster_path, el: card}

    })
  }
    
function getColor(vote){
  if (vote>=7.5){
    return'green'
  } else if (vote>=5) {
    return 'orange'
  } else {
    return 'red'
  }
}


// const gameQuestions = [
//     {id: 0, q:"The composer of the score for \"Jaws\" was John Williams.",
//      a: "True"},
//     {id: 1, q:"The song \"As Time Goes By\" from \"Casablanca\" was written specifically for the film.",
//      a: "False"},
//      {id: 2,q:"The song \"Moon River\" from \"Breakfast at Tiffany's\" was composed by Henry Mancini.",
//      a: "True"},
//      {id: 3,q:"The soundtrack for the film \"The Godfather\" won the Academy Award for Best Original Score",
//      a: "True"},
//      {id: 4,q:"The song \"Let it Go\" from the Disney film \"Frozen\" won the Academy Award for Best Original Song.",
//      a: "True"},
//      {id: 5,q:"The composer of the score for \"Star Wars\" was John Williams.",
//      a: "True"},
//      {id: 6,q:"The song \"My Heart Will Go On\" from \"Titanic\" was written by Celine Dion.",
//      a: "True"},
//      {id: 7, q:"The song \"Stayin' Alive\" from \"Saturday Night Fever\" was composed by the Bee Gees.",
//      a: "True"},
//      {id: 8, q:"The composer of the score for \"Harry Potter and the Sorcerer's Stone\" was John Williams.",
//      a: "False"},
//      {id: 9, q:"The song \"Over the Rainbow\" from \"The Wizard of Oz\" was composed by Harold Arlen.",
//      a: "True"}
// ]









// mini = gameQuestions.map(inject =>{
//     const card = template.content.cloneNode(true).children[0]
//     const cardHeader = card.querySelector('[data-card-header]')
//     const cardQuestion = card.querySelector('[data-card-para]')
//     const cardAnswer = card.querySelector('[data-card-ans]')
//     const cardImage = card.querySelector('[card-image]')
//     cardImage.textContent=`<img src='${IMG_PATH + poster_path}'`
//     cardQuestion.textContent=inject.q
//     cardAnswer.textContent=inject.a
//     cardContainer.append(card)
//     return {q: inject.q, a: inject.a, el: card}
// })

// console.log(movie.title)
// let find = () =>{
//   data.forEach(que => {
//     const isVisible = movie.title.includes(search.value)
//     que.el.classList.toggle('hide', !isVisible)
//   });
  
// }

search.addEventListener('input',find)

