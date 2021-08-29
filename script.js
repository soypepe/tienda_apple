//js comun
document.querySelectorAll('.reloj-control, .controles a, .iphone-btn')
  .forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault()
    })
  })
//js comun final

//cubo
let x = 0
let y = 20
let z = 0

let bool = true
let intervalo
const cubo = document.querySelector('.cubo')
document.querySelector('.control-x-arriba')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateX(${x += 20}deg)
    rotateY(${y}deg) rotateZ(${z}deg)`
  })

document.querySelector('.control-x-abajo')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateX(${x -= 20}deg)
    rotateY(${y}deg) rotateZ(${z}deg)`
  })

document.querySelector('.control-y-izquierda')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateY(${y -= 20}deg)
    rotateX(${x}deg) rotateZ(${z}deg)`
  })

document.querySelector('.control-y-derecha')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateY(${y += 20}deg)
    rotateX(${x}deg) rotateZ(${z}deg)`
  })

document.querySelector('.control-z-arriba')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateY(${y}deg)
    rotateX(${x}deg) rotateZ(${z -= 20}deg)`
  })

document.querySelector('.control-z-abajo')
  .addEventListener('click', () => {
    cubo.style.transform = `rotateY(${y}deg)
    rotateX(${x}deg) rotateZ(${z += 20}deg)`
  })
const playPause = () => {
  if (bool) {
    intervalo = setInterval(() => {
      cubo.style.transform = `rotateX(${x}deg)
      rotateY(${y++}deg) rotateZ(${z})`
    }, 100);
  } else {
    clearInterval(intervalo)
  }
}

playPause()

document.querySelector('.controles')
  .addEventListener('mouseover', () => {
    bool = false
    playPause()
  })

document.querySelector('.controles')
  .addEventListener('mouseout', () => {
    bool = true
    playPause()
  })
//cubo final

//slideshow
const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div')
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

    i === 1 && div.classList.add('cambio')

    document.querySelector('.slideshow').appendChild(div)
  }
}

slideShowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideShow = () => {
  setInterval(() => {
    a++
    const div = document.querySelector('.slideshow .cambio')
    div.classList.remove('cambio')

    if (a < divs.length) {
      div.nextElementSibling.classList.add('cambio')
    } else {
      divs[0].classList.add('cambio')
      a = 1
    }
  }, 20000);
}

slideShow()
//slideshow final

//seccion 3
const seccion3Contenido = document.querySelector('.seccion-3-contenido')

window.addEventListener('scroll', () => {
  if (window.pageYOffset + window.innerHeight >= seccion3Contenido.offsetTop + seccion3Contenido.offsetHeight / 2) {
    seccion3Contenido.classList.add('cambio')
  }
})
//seccion 3 final

//seccion 4
const bandasReloj = document.querySelector('.reloj-bandas')
const carcasasReloj = document.querySelector('.reloj-carcasas')

const relojArribaControl = document.querySelector('.control-reloj-arriba')
const relojDerechaControl = document.querySelector('.control-reloj-derecha')
const relojAbajoControl = document.querySelector('.control-reloj-abajo')
const relojIzquierdaControl = document.querySelector('.control-reloj-izquierda')

let ejeY = 0
let ejeX = 0

const esconderControl = () => {
  if (ejeY === -280) {
    relojArribaControl.classList.add('esconderControl')
  } else {
    relojArribaControl.classList.remove('esconderControl')
  }

  if (ejeY === 280) {
    relojAbajoControl.classList.add('esconderControl')
  } else {
    relojAbajoControl.classList.remove('esconderControl')
  }

  if (ejeX === 280) {
    relojDerechaControl.classList.add('esconderControl')
  } else {
    relojDerechaControl.classList.remove('esconderControl')
  }

  if (ejeX === -280) {
    relojIzquierdaControl.classList.add('esconderControl')
  } else {
    relojIzquierdaControl.classList.remove('esconderControl')
  }
}

relojArribaControl.addEventListener('click', () => {
  carcasasReloj.style.marginTop = `${ejeY -= 70}rem`
  esconderControl()
})

relojAbajoControl.addEventListener('click', () => {
  carcasasReloj.style.marginTop = `${ejeY += 70}rem`
  esconderControl()
})

relojDerechaControl.addEventListener('click', () => {
  bandasReloj.style.marginRight = `${ejeX += 70}rem`
  esconderControl()
})

relojIzquierdaControl.addEventListener('click', () => {
  bandasReloj.style.marginRight = `${ejeX -= 70}rem`
  esconderControl()
})
//seccion 4 final