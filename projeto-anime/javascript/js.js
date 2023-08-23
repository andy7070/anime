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

const btnprev = document.getElementById('slider_btn_esquerdo')
const btnnext = document.getElementById('slider_btn_direito')




let c = 0


function slider(){
    c++
  if(c == b.length - 1){
c = 0 }else{
 }
 box.style.transform = `translateX(${-c * 195}px)`
}

 setInterval (slider, 3000)






























 