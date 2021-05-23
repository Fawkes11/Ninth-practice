var acc = document.getElementsByClassName("accordion");

        /* acc[1].lastElementChild.style.display = "block";
        acc[1].firstElementChild.firstElementChild.style.color = "black"; */

for (let i = 0; i<acc.length; i++){

    acc[i].addEventListener("click", function() {

        var panel = this.lastElementChild;
        var other = this.firstElementChild.firstElementChild;
        var imgin = this.firstElementChild.lastElementChild;
        imgin.classList.toggle("arrow__inverse");
        other.classList.toggle("other__style");

        /* if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        } */

        if(panel.style.maxHeight){
            panel.style.maxHeight  = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    
    });
    
}
