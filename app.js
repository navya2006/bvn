elements=document.getElementsByClassName("selectButton")

function myFunction(colour){
    img=document.getElementById("img");
    img.src=`images\\${colour}.png`;
    elm=document.getElementsByClassName("active");
    elm[0].classList.remove("active");
    document.getElementById(colour).classList.add("active");
}
