var btn = document.querySelector('button');
var grow = 0;
var h2  = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', function() { 
    btn.style.pointerEvents = "none"
   var cmplt = setInterval(function(){
        grow++
        h2.innerHTML = grow+"%"
        inner.style.width = grow+"%"
    },100)

 setTimeout(function(){
    clearInterval(cmplt)
 },10000)

 });