var search_bt = document.querySelector(".bt1")
var input_search = document.querySelector(".input")
var close = document.querySelector(".close")

search_bt.addEventListener("click",function(){
    input_search.classList.remove("hide")
    close.classList.remove("hide")
})

close.addEventListener("click",function(){
    input_search.classList.add("hide")
    close.classList.add("hide")
})
