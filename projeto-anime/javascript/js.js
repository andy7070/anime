function clickMenu(){
if(animes.style.display == 'none'){
  animes.style.display = 'block'
} else {
  animes.style.display = 'none'
}

}

function clickMenu2(){
if(animes2.style.display == 'none'){
animes2.style.display = 'block'}else{
animes2.style.display = 'none'}}

function clickMenu3(){
if(animes3.style.display == 'none'){
    animes3.style.display = 'block'
} else{
animes3.style.display = 'none'}}


function clickMenu4(){
if(animes4.style.display == 'none'){
animes4.style.display = 'block'}else{
 animes4.style.display = ' none'}}

 function clickMenu5(){
if(animes5.style.display == 'none'){
 animes5.style.display = 'block' }else{
  animes5.style.display = 'none' }
}


function clickMenu6(){
 if(animes6.style.display == 'none'){
   animes6.style.display= 'block'}else{
  animes6.style.display = 'none'}}

  function click(){
   document.style.transform = 'rotate(90)deg'
}


const box = document.querySelector('.slider')
const b = document.querySelectorAll('.slider img')

let c = 0


function slider(){
    c++
  if(c == b.length - 1){
c = 0 }else{
    box.style.transform = `translateX(${-c * 195}px)`
 }}

 setInterval (slider, 3000)