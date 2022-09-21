let message = document.querySelector('#message')


function addMovie(e){
    e.preventDefault()
    const inputfield = document.querySelector('input')
    let movie = document.createElement('li')
    console.log(movie)
    let movieTitle = document.createElement('span')
    console.log(movieTitle)
    //////////////////////////////////////////////////////////////////
    document.addEventListener('click', crossOffMovie)
    //////////////////////////////////////////////////////////////////
    movieTitle.textContent = inputfield.value
    console.log(inputfield.value)
    movie.appendChild(movieTitle)

//////////////////////////////////////////////////////////////////

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
//////////////////////////////////////////////////////////////////


document.querySelector('form').appendChild(movie)
    
}
function deleteMovie(e){
    e.target.parentNode.remove()
    message.textContent= `movie deleted!`
}
document.querySelector('form').addEventListener('submit', addMovie)

//////////////////////////////////////////////////////////////////

function crossOffMovie(e){
    e.target.classList.toggle('checked')
    if (e.target.classList.contains('checked') === true){
        return message.textContent = 'movie watched!'
    } else {
        return message.textContent = ' movie added back!'
    }
}

//////////////////////////////////////////////////////////////////
