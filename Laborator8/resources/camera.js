
window.onload = function(){
    var container = document.getElementById("vizor");
    var image = container.children[0];
    console.log(image);
    document.body.addEventListener("keydown", function(event) {
        switch(event.key) {
            case "ArrowLeft":
                function moveLeft () {
                    console.log(window.getComputedStyle(image).getPropertyValue("margin-left"));
                    image.style.marginLeft  = parseInt(window.getComputedStyle(image).getPropertyValue("margin-left")) + 1 + "px";
                }
                moveLeft();
                var it = setInterval(moveLeft, 100);
                if(parseInt(parseInt(window.getComputedStyle(image).getPropertyValue("margin-left"))) == 0)
                    clearInterval(it);
                document.body.addEventListener("keyup", function(event){
                    clearInterval(it);
                })
                break;
            case "ArrowRight":
                function moveRight () {
                    console.log(window.getComputedStyle(image).getPropertyValue("margin-left"));
                    image.style.marginLeft  = parseInt(window.getComputedStyle(image).getPropertyValue("margin-left")) - 1 + "px";
                }
                moveRight();
                var it = setInterval(moveRight, 100);
                if(parseInt(parseInt(window.getComputedStyle(image).getPropertyValue("margin-left"))) == -1628)
                    clearInterval(it);
                document.body.addEventListener("keyup", function(event){
                    clearInterval(it);
                })
                break;
            case "ArrowUp":
                break;
            case "ArrowDown":
                break;
        }
    })
}


