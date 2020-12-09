var array = document.getElementsByClassName("youtube");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    var id = element.id
    element.style["background-image"] = `url("https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp")`
    element.innerHTML += '<div class="play"></div>'
    
    element.onclick = function() {
        replacecontent(id);
    }
}

function replacecontent(id){
    var frame = getframe(id);
    document.getElementById(id).outerHTML = frame;
}


function getframe (id) {
    var height = document.getElementById(id).clientHeight;
    var width = document.getElementById(id).clientWidth;
    return (
        `<iframe width=${width} height=${height} src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
}