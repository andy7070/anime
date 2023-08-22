function clickMenu(){
  
  if(animes.style.display == 'block'){
    animes.style.display = 'none'
  } else {
    animes.style.display = 'block'
  }
   animes.style.transition = ' 1s'
  }
  
  function clickMenu2(){
  if(animes2.style.display == 'block'){
  animes2.style.display = 'none'}else{
  animes2.style.display = 'block'}}
  
  function clickMenu3(){
  if(animes3.style.display == 'block'){
      animes3.style.display = 'none'
  } else{
  animes3.style.display = 'block'}}
  
  
  function clickMenu4(){
  if(animes4.style.display == 'block'){
  animes4.style.display = 'none'}else{
   animes4.style.display = ' block'}}
  
   function clickMenu5(){
  if(animes5.style.display == 'block'){
   animes5.style.display = 'none' }else{
    animes5.style.display = 'block' }
  }
  
  
  function clickMenu6(){
   if(animes6.style.display == 'block'){
     animes6.style.display= 'none'}else{
    animes6.style.display = 'block'}}
  



const box = document.querySelector('.slider')
const b = document.querySelectorAll('.conteudo')

let c = 0


function slider(){
    c++
  if(c == b.length - 1){
c = - 1 }else{
  box.style.transform = `translateX(${-c * 195}px)`
 }}

 setInterval (slider, 3000)



const slider = document.querySelectorAll('.slider-img')
const btnprev = document.querySelectorAll('.slider-btn-esquerdo')
const btnnext = document.querySelectorAll('.slider-btn-direito')


let currentSlider = 0

function hiderSlider(){
slider.array.forEach(item => item.classList.remove('on'))}


function showSlider () {
  slider[currentSlider1].classList.add('on')
}






















 