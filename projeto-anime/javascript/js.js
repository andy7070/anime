function clickMenu(){
  
  if(animes.style.display == 'block'){
    animes.style.display = 'none'
  } else {
    animes.style.display = 'block'
  }

   
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
  


  function setaEp(){
    if(epep.style.display == 'block'){
    epep.style.display = 'none'} else{
    epep.style.display = 'block'}

    epep.style.transition = '0.7s'

    if(epseta.style.transform == 'rotateX(0deg)'){
    epseta.style.transform = 'rotateX(180deg)'}else{
    epseta.style.transform = 'rotateX(0deg)'}

    
  }
    
  const box = document.querySelector('.imagens')
  const b = document.querySelectorAll('.imagens img')
  const direito = document.getElementById('direito')
  const esquerdo = document.getElementById('esquerdo')



  let c = 0


  function slider(){
    c++
  if(c == b.length - 1){
c =  0 }else{
 }
 box.style.transform = `translateX(${-c * 190}px)`
}

 setInterval (slider, 5000)





 direito.addEventListener('click', next)
 esquerdo.addEventListener('click', prev)


 
 











 