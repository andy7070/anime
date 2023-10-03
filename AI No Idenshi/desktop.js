


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
const teste2 = document.getElementById('click2')
const teste3 = document.getElementById('iframes')
const setafechar = document.getElementById('icon_fechar')
const fechartrailer = document.getElementById('fechar_trailer')
let a = 0




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













