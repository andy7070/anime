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

    



    const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 5000)






































 