var items = document.querySelectorAll(".timeline li")


function iselementInViewport(e){
    var rect = e.getBoundingClientRect()
    return(
        rect.top >= 0 &&
        rect.left >=0 &&
        rect.bottom <= innerHeight &&
        rect.right <= innerWidth
    )
}

function callbackfunc(){
    for(var i=0; i<items.length; i++){
        if(iselementInViewport(items[i])){
            items[i].classList.add("in-view")
        }
    }
}

window.addEventListener("scroll",callbackfunc)