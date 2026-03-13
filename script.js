window.addEventListener("scroll", function(){
    const Header = document.getElementById("header");
    const a = this.document.getElementsByClassName("a")
    const Link = this.document.getElementById("link");
    // const a = document.getElementById("ol-a");
    // const Header = document.getElementById("header");
    if(window.scrollY > 99){
        Header.classList.add("sticky");
        Link.classList.add("sticky")
        for(let i = 0; i <= 9; i++){
            a[i].classList.add("sticky");
        }
    }
    else{
        Header.classList.remove("sticky");
        Link.classList.remove("sticky")
                for(let i = 0; i <= 9; i++){
            a[i].classList.remove("sticky");
        }
    }
});