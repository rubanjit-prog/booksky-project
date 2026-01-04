var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.getElementById("add-popup-button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpopup = document.getElementById("cancel-book")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var bookcontainer = document.querySelector(".book-container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    bookcontainer.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}



