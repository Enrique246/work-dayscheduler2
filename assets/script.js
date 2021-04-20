// Local Storage variables

// // Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//https://www.w3schools.com/htmL/html5_webstorage.asp

let tArea9Storage = localStorage.getItem('h9');
let tArea10Storage = localStorage.getItem('h10');
let tArea11Storage = localStorage.getItem('h11');
let tArea12Storage = localStorage.getItem('h12');
let tArea1Storage = localStorage.getItem('h1');
let tArea2Storage = localStorage.getItem('h2');
let tArea3Storage = localStorage.getItem('h3');
let tArea4Storage = localStorage.getItem('h4');
let tArea5Storage = localStorage.getItem('h5');

// Id's for variables

//Calling jQuery() (or $()) with an id selector as its argument will return a jQuery object containing a collection of either zero or one DOM element.
//https://api.jquery.com/id-selector/

let tArea9 = $('#h9');
let tArea10 = $('#h10');
let tArea11 = $('#h11');
let tArea12 = $('#h12');
let tArea1 = $('#h1');
let tArea2 = $('#h2');
let tArea3 = $('#h3');
let tArea4 = $('#h4');
let tArea5 = $('#h5');

// Value variables
//The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined.
// https://api.jquery.com/val/#val
tArea9.val (tArea9Storage);
tArea10.val (tArea10Storage);
tArea11.val (tArea11Storage);
tArea12.val (tArea12Storage);
tArea1.val (tArea1Storage);
tArea2.val (tArea2Storage);
tArea3.val (tArea3Storage);
tArea4.val (tArea4Storage);
tArea5.val (tArea5Storage);

// Current day query
let cDate = moment().format("dddd, MMMM Do, YYYY")

$('#currentDay').text(cDate);

//Changing colors function

// // With jQuery
// Add, remove, and the toggle the "focus" class
// $(".box").addClass("focus");
// $(".box").removeClass("focus");
// $(".box").toggleClass("focus");
// https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/

function colors() {
    let currentTime = moment().hours();
//In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    $('.time-block').each(function () {
        let cHour= parseInt($(this).attr("id"));

    if (cHour < currentTime) {
        $(this).addClass("past");
    }
    else if (cHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }

    else { 
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    
    });
};
// Run function colors to paint the inputs according to the time 
colors();

// Save button function

//events
// Type: String
// One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
// selector
// Type: String
// A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
//https://api.jquery.com/on/

$('.saveBtn').on("click", function (event){
event.preventDefault();

let siblingSaveB = $(this).prev();
let variableT = siblingSaveB.attr("id");
let textContent = siblingSaveB.val();

localStorage.setItem(variableT, textContent);

});

