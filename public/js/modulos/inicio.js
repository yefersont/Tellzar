//////////////////////////// Barra de navegacion /////////////////////////////////


/////// boton menu ///////////
 document.getElementById("icon-menu").addEventListener("click", mostrar_menu)

function mostrar_menu(){
  document.getElementById("move-content").classList.toggle('container-all');
  //document.getElementById("show-menu").classList.toggle('show-lateral');

}
///////////////////////////////////////////////// seccion de la tienda ////////////////////////////7

/////////////////////////////// PANEL JAPONES //////////////////////////

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


var img = document.getElementById("myImg");
var button = document.getElementById("botonpanel")
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0


img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

button.onclick =  function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
} 


//////////// carrucel ////////////

console.log(slider_content)
const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    
  unmount()
    if(index >= slider_content.length - 1){
        index = 0
    }
    else {
 
        index++
    }
    mount()
})

prev.addEventListener('click', () => {
    unmount()
    if(index <= 0){
        index = slider_content.length - 1
    }
    else {
        index--
    }
    mount()
})




///////////////////////////////////////// Sheer elegance /////////////////////////////


var modal1 = document.getElementById("myModal1");


var img1 = document.getElementById("myImg1");
var button1 = document.getElementById("botonsheer")
var modalImg1 = document.getElementById("img02");
var captionText1 = document.getElementById("caption1");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}
button1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = img1.src;
  captionText1.innerHTML = img1.alt;
}


/* CARRUCEL */ 

const next1 = document.querySelector('.next1')
const prev1 = document.querySelector('.prev1')
let index1 = 0
const slider_content1 = document.querySelectorAll('.slider_content1')

console.log(slider_content1)
const mount1 = () => slider_content1[index1].classList.add('active1')
const unmount1 = () => slider_content1[index1].classList.remove('active1')
next1.addEventListener('click', () => {
    
  unmount1()
    if(index1 >= slider_content1.length - 1){
        index1 = 0
    }
    else {
 
        index1++
    }
    mount1()
})

prev1.addEventListener('click', () => {
    unmount1()
    if(index1 <= 0){
        index1 = slider_content1.length - 1
    }
    else {
        index1--
    }
    mount1()
})








// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
}






///////////////////////////////////////// Sheer Screen /////////////////////////////

var modal2 = document.getElementById("myModal2");


var img2 = document.getElementById("myImg2");
var button2 = document.getElementById("botonvertical")
var modalImg2 = document.getElementById("img03");
var captionText2 = document.getElementById("caption2");

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

button2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = img2.src;
  captionText2.innerHTML = img2.alt;
}


// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}

/////////////////////////////////// Persiana Vertical //////////////////////////

var modal3 = document.getElementById("myModal3");


var img3 = document.getElementById("myImg3");
var button3 = document.getElementById("botonromana")
var modalImg3 = document.getElementById("img04");
var captionText3 = document.getElementById("caption3");

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

button3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = img3.src;
  captionText3.innerHTML = img3.alt;
}
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}


/////////////////////////// Romanas //////////////////////////////////

var modal4 = document.getElementById("myModal4");


var img4 = document.getElementById("myImg4");
var button4 = document.getElementById("botonenrollable")
var modalImg4 = document.getElementById("img05");
var captionText4 = document.getElementById("caption4");

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

button4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = img4.src;
  captionText4.innerHTML = img4.alt;
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modal4.style.display = "none";
}

/////////////////////////////// Enrollables ////////////////////////////


var modal5 = document.getElementById("myModal5");


var img5 = document.getElementById("myImg5");
var button5 = document.getElementById("botonmacromadera")
var modalImg5 = document.getElementById("img06");
var captionText5 = document.getElementById("caption5");

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

button5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = img5.src;
  captionText5.innerHTML = img5.alt;
}

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
  modal5.style.display = "none";
}

//////////////////////////////////// Mini persiana de aluminio ///////////////


var modal6 = document.getElementById("myModal6");


var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img07");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span6.onclick = function() { 
  modal6.style.display = "none";
}



document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
} 
