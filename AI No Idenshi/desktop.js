


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

const abrirFechar = document.getElementById('abrir-menu-fechar')
const seta = document.getElementById('setinha-ep')
const frames = document.getElementById('frames')
const clickTrailer = document.getElementById('click')
const teste = document.getElementById('sair')

let a = 0



seta.addEventListener('click', function() {
  if(abrirFechar.style.display == 'none'){
     abrirFechar.style.display = 'block'
  } else{
  abrirFechar.style.display = 'none'
  }
   if(seta.style.transform == 'rotate(0deg)'){
    seta.style.transform = 'rotate(180deg)'
  } else {
   seta.style.transform = 'rotate(0deg)'
  }
})


clickTrailer.addEventListener('click', function(){
 if(frames.style.display =='block'){
 frames.style.display = 'none'
} else{
frames.style.display = 'block'
}
clickTrailer.style.transition = ' transform 5s ease-in-out linear'


})





