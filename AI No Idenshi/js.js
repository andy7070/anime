function clickMenu(){
  
  if(animes.style.display == 'block'){
    animes.style.display = 'none'
  } else {
    animes.style.display = 'block'
  }
  teste0.style.transitionDuration = 'bottom 3s'
   
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
    if(epep.style.display == 'none'){
    epep.style.display = 'block'} else{
    epep.style.display = 'none'}

    epep.style.transition = '0.7s'

    if(epseta.style.transform == 'rotateX(0deg)'){
    epseta.style.transform = 'rotateX(180deg)'}else{
    epseta.style.transform = 'rotateX(0deg)'}

    
  }

 
  const slidwrapper = document.querySelectorAll('#slid-wrapper')
  const slid = document.querySelectorAll('#slid-content img')
  const nextButton = document.getElementById('right')
  const slidItem = document.querySelectorAll('.slid-item')
  const slidlist = document.getElementById('slid-list')
  const slidcontent = document.getElementById('slid-content')


  let contador = 0



nextButton.addEventListener('click', function(){
  contador = contador - 190
    
  if(contador == slidlist.length - 1){
   contador = 0
  } else{
   slidlist.style = `transform: translateX(${contador}px)`
  }
})

