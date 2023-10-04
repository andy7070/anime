
const abrirFechar = document.getElementById('abrir-menu-fechar')
const seta = document.getElementById('setinha-ep')
const frames = document.getElementById('frames')
const clickTrailer = document.getElementById('click')
const teste = document.getElementById('sair')
const teste2 = document.getElementById('click2')
const teste3 = document.getElementById('iframes')
const setafechar = document.getElementById('icon_fechar')
const fechartrailer = document.getElementById('fechar_trailer')
const container2 = document.getElementById('container2')
const container1 = document.getElementById('conteiner')
const container3 = document.getElementById('container3')
const container4 = document.getElementById('recom-mobile-content')
const container5 = document.getElementById('final-mobile-content')

 function menus(){
function menu1(){
  if(animes2_pc.style.display == 'block'){
  animes2_pc.style.display = 'none'
} else {
animes2_pc.style.display = 'block'
}
}
function menu2(){
  if(animes3_pc.style.display == 'block'){
  animes3_pc.style.display = 'none'
} else {
animes3_pc.style.display = 'block'
}
}
function menu3(){
  if(animes4_pc.style.display == 'block'){
  animes4_pc.style.display = 'none'
} else {
animes4_pc.style.display = 'block'
}
}
function menu4(){
  if(animes5_pc.style.display == 'block'){
  animes5_pc.style.display = 'none'
} else {
animes5_pc.style.display = 'block'
}
}
function menu5(){
  if(animes6_pc.style.display == 'block'){
  animes6_pc.style.display = 'none'
} else {
animes6_pc.style.display = 'block'
}
}
 }


teste2.addEventListener('click', function(){ 
   if(frames.style.display == 'block'){
     frames.style.display = 'none'
   }else {
    frames.style.display = 'block'
   }
   frames.style.position = 'fixed' 
   if (frames.style.display == 'block'){
    teste.style.background = 'rgba(0,0,0,10)'
   }else if(frames.style.display == 'none'){
     teste.style.background = '#1b1f35'
   }

})

 function fechar_trailer(){
container2.addEventListener('click', function (){
       frames.style.display = 'none'
       teste.style.background = '#1b1f35'
       teste.style.transition = '1s'
})
container1.addEventListener('click', function(){
    frames.style.display = 'none'
    teste.style.background = '#1b1f35'
    teste.style.transition = '1s'
})
container3.addEventListener('click', function(){
  frames.style.display = 'none'
  teste.style.background = '#1b1f35'
  teste.style.transition = '1s'
})
container4.addEventListener('click', function(){
  frames.style.display = 'none'
  teste.style.background = '#1b1f35'
  teste.style.transition = '1s'
})
container5.addEventListener('click', function(){
  frames.style.display = 'none'
  teste.style.background = '#1b1f35'
  teste.style.transition = '1s'
})
 }

 function Chamadas_das_funçoes(){
 menus()
 fechar_trailer()
 }

 Chamadas_das_funçoes()



















