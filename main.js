// Ustawienia wstępne

const A1 = document.querySelector('#a1')
let existA1 = false
const A2 = document.querySelector('#a2')
let existA2 = false
const A3 = document.querySelector('#a3')
let existA3 = false
const B1 = document.querySelector('#b1')
let existB1 = false
const B2 = document.querySelector('#b2')
let existB2 = false
const B3 = document.querySelector('#b3')
let existB3 = false
const C1 = document.querySelector('#c1')
let existC1 = false
const C2 = document.querySelector('#c2')
let existC2 = false
const C3 = document.querySelector('#c3')
let existC3 = false

const player = document.querySelector('#player')
const title = document.querySelector('.title')
const reset = document.querySelector('.reset')
const bot = document.querySelector('.ai')

let order = [] // Pusta tablica dla obiektów stała
let name = [] // Pusta tablica dla obiektów zależna od ruchu

for (let i = 1; i < 9; i++) { // Zabezpieczenie przed automatycznymi wygranymi
  name.push(i)
}

let index = 0 // Index kolejki
let positionIndex = 0 // Index Pozycji
let botMode = false
let orderRandom
let botShape = 'circle'
let yourShape = 'square'

for (let i = 0; i < 9; i++) { // Generator tablicy z obiektami HTML kółka i kwadratu
  if (i % 2 == true) {
    order[i] = document.createElement('div')
    order[i].classList.add('square')
  }
  if (i % 2 == false) {
    order[i] = document.createElement('div')
    order[i].classList.add('circle')
  }
}

function changeOrder() { // Podnosi index kolejki, sprawdza czy jest wygrana, renderuje informację kto ma teraz ruch
  index++
  checkWinner()
  renderPlayer()
  if (botMode === true) {
    botOrder()
  }
}

function botOrder() {
  if (index%2 == false) {
    botWantWin()
    if(index%2 ==false){
      orderRandom = Math.round(Math.random() * 8)
      if(existA1 === false && orderRandom == 0) {A1click()}
      if (existA2 === false && orderRandom == 2) {A2click()}
      if (existA3 === false && orderRandom == 1) {A3click()}
      if (existB1 === false && orderRandom == 3) {B1click()}
      if (existB2 === false && orderRandom == 4) {B2click()}
      if (existB3 === false && orderRandom == 5) {B3click()}
      if (existC1 === false && orderRandom == 6) {C1click()}
      if (existC2 === false && orderRandom == 7) {C2click()}
      if (existC3 === false && orderRandom == 8) {C3click()}
    }
    botOrder()
  }
  botMode = true
}

function botWantWin() {
  if (name[0] === botShape && name[1] === botShape && existA3 == false) {A3click()}
  else if (name[0] === botShape && name[2] === botShape && existA2 == false) {A2click()}
  else if (name[0] === botShape && name[3] === botShape && existC1 == false) {C1click()}
  else if (name[0] === botShape && name[4] === botShape && existC3 == false) {C3click()}
  else if (name[0] === botShape && name[6] === botShape && existB1 == false) {B1click()}
  else if (name[0] === botShape && name[8] === botShape && existB2 == false) {B2click()}

  else if (name[1] === botShape && name[2] === botShape && existA1 == false) {A1click()}
  else if (name[1] === botShape && name[4] === botShape && existC2 == false) {C2click()}
  else if (name[1] === botShape && name[7] === botShape && existB2 == false) {B2click()}

  else if (name[2] === botShape && name[4] === botShape && existC1 == false) {C1click()}
  else if (name[2] === botShape && name[5] === botShape && existC3 == false) {C3click()}
  else if (name[2] === botShape && name[6] === botShape && existB2 == false) {B2click()}
  else if (name[2] === botShape && name[8] === botShape && existB3 == false) {B3click()}

  else if (name[3] === botShape && name[4] === botShape && existB3 == false) {B3click()}
  else if (name[3] === botShape && name[5] === botShape && existB2 == false) {B2click()}
  else if (name[3] === botShape && name[6] === botShape && existA1 == false) {A1click()}

  else if (name[4] === botShape && name[5] === botShape && existB1 == false) {B1click()}
  else if (name[4] === botShape && name[6] === botShape && existA3 == false) {A3click()}
  else if (name[4] === botShape && name[7] === botShape && existA2 == false) {A2click()}
  else if (name[4] === botShape && name[8] === botShape && existA1 == false) {A1click()}

  else if (name[5] === botShape && name[8] === botShape && existA3 == false) {A3click()}

  else if (name[6] === botShape && name[7] === botShape && existC3 == false) {C3click()}
  else if (name[6] === botShape && name[8] === botShape && existC2 == false) {C2click()}

  else if (name[7] === botShape && name[8] === botShape && existC1 == false) {C1click()}
  else{
    if (name[0] === yourShape && name[1] === yourShape && existA3 == false) {A3click()}
    else if (name[0] === yourShape && name[2] === yourShape && existA2 == false) {A2click()}
    else if (name[0] === yourShape && name[3] === yourShape && existC1 == false) {C1click()}
    else if (name[0] === yourShape && name[4] === yourShape && existC3 == false) {C3click()}
    else if (name[0] === yourShape && name[6] === yourShape && existB1 == false) {B1click()}
    else if (name[0] === yourShape && name[8] === yourShape && existB2 == false) {B2click()}

    else if (name[1] === yourShape && name[2] === yourShape && existA1 == false) {A1click()}
    else if (name[1] === yourShape && name[4] === yourShape && existC2 == false) {C2click()}
    else if (name[1] === yourShape && name[7] === yourShape && existB2 == false) {B2click()}

    else if (name[2] === yourShape && name[4] === yourShape && existC1 == false) {C1click()}
    else if (name[2] === yourShape && name[5] === yourShape && existC3 == false) {C3click()}
    else if (name[2] === yourShape && name[6] === yourShape && existB2 == false) {B2click()}
    else if (name[2] === yourShape && name[8] === yourShape && existB3 == false) {B3click()}

    else if (name[3] === yourShape && name[4] === yourShape && existB3 == false) {B3click()}
    else if (name[3] === yourShape && name[5] === yourShape && existB2 == false) {B2click()}
    else if (name[3] === yourShape && name[6] === yourShape && existA1 == false) {A1click()}

    else if (name[4] === yourShape && name[5] === yourShape && existB1 == false) {B1click()}
    else if (name[4] === yourShape && name[6] === yourShape && existA3 == false) {A3click()}
    else if (name[4] === yourShape && name[7] === yourShape && existA2 == false) {A2click()}
    else if (name[4] === yourShape && name[8] === yourShape && existA1 == false) {A1click()}

    else if (name[5] === yourShape && name[8] === yourShape && existA3 == false) {A3click()}

    else if (name[6] === yourShape && name[7] === yourShape && existC3 == false) {C3click()}
    else if (name[6] === yourShape && name[8] === yourShape && existC2 == false) {C2click()}

  else if (name[7] === yourShape && name[8] === yourShape && existC1 == false) {C1click()}
  }
}

function checkWinner() { // Sprawdzenie zwycięscy
  if (name[0] === name[1] && name[0] === name[2] && name[1] === name[2]) {
    endGame()
  }
  if (name[3] === name[4] && name[3] === name[5] && name[4] === name[5]) {
    endGame()
  }
  if (name[6] === name[7] && name[6] === name[8] && name[7] === name[8]) {
    endGame()
  }
  if (name[0] === name[3] && name[0] === name[6] && name[3] === name[6]) {
    endGame()
  }
  if (name[1] === name[4] && name[1] === name[7] && name[4] === name[7]) {
    endGame()
  }
  if (name[2] === name[5] && name[2] === name[8] && name[5] === name[8]) {
    endGame()
  }
  if (name[0] === name[4] && name[0] === name[8] && name[4] === name[8]) {
    endGame()
  }
  if (name[2] === name[4] && name[2] === name[6] && name[4] === name[6]) {
    endGame()
  }
}

function endGame() { // Zakończenie gry - blokowanie pozostałych pól i render napisów zwycięscy
  existA1 = true
  existA2 = true
  existA3 = true
  existB1 = true
  existB2 = true
  existB3 = true
  existC1 = true
  existC2 = true
  existC3 = true
  title.textContent = `Wygrał ${index%2 ? 'Kółko' : 'Kwadrat'} !!!`
  title.style.color = `${index%2 ? 'palevioletred' : 'lightseagreen'}`
}

function renderPlayer() { // Renderuje czyj teraz ruch
  if (index % 2 == false) {
    player.textContent = 'Kółko'
    player.style.color = 'palevioletred'
  } else if (index % 2 == true) {
    player.textContent = 'Kwadrat'
    player.style.color = 'lightseagreen'
  }
}

function A1click() { // Lewy górny
  if (existA1 === false) {
    A1.append(order[index])
    positionIndex = 0
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existA1 = true
    changeOrder()
  }
}

function A2click() { // Lewy środkowy
  if (existA2 === false) {
    A2.append(order[index])
    positionIndex = 1
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existA2 = true
    changeOrder()
  }
}

function A3click() { // Lewy dolny
  if (existA3 === false) {
    A3.append(order[index])
    positionIndex = 2
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existA3 = true
    changeOrder()
  }
}

function B1click() { // Górny środkowy
  if (existB1 === false) {
    B1.append(order[index])
    positionIndex = 3
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existB1 = true
    changeOrder()
  }
}

function B2click() { // Środkowy
  if (existB2 === false) {
    B2.append(order[index])
    positionIndex = 4
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existB2 = true
    changeOrder()
  }
}

function B3click() { // Dolny środkowy
  if (existB3 === false) {
    B3.append(order[index])
    positionIndex = 5
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existB3 = true
    changeOrder()
  }
}

function C1click() { // Prawy górny
  if (existC1 === false) {
    C1.append(order[index])
    positionIndex = 6
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existC1 = true
    changeOrder()
  }
}

function C2click() { // Prawy środkowy
  if (existC2 === false) {
    C2.append(order[index])
    positionIndex = 7
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existC2 = true
    changeOrder()
  }
}

function C3click() { // Prawy dolny
  if (existC3 === false) {
    C3.append(order[index])
    positionIndex = 8
    if (index % 2 == false) {
      name[positionIndex] = 'circle'
    } else if (index % 2 == true) {
      name[positionIndex] = 'square'
    }
    existC3 = true
    changeOrder()
  }
}

A1.addEventListener('click', A1click)
A2.addEventListener('click', A2click)
A3.addEventListener('click', A3click)
B1.addEventListener('click', B1click)
B2.addEventListener('click', B2click)
B3.addEventListener('click', B3click)
C1.addEventListener('click', C1click)
C2.addEventListener('click', C2click)
C3.addEventListener('click', C3click)

reset.addEventListener('click', function () { //Przycisk z funkcją resetu aplikacji
  name = []
  positionIndex = 0
  botMode = false
  existA1 = false
  existA2 = false
  existA3 = false
  existB1 = false
  existB2 = false
  existB3 = false
  existC1 = false
  existC2 = false
  existC3 = false
  title.textContent = 'Kółko i Kwadrat'
  title.style.color = 'black'
  renderPlayer()
  for (let i = 1; i < 9; i++) {
    name.push(i)
  }
  for (let i = 0; i < 8; i++) {
    if (index <= 0) {
      index = 0
      renderPlayer()
    } else {
      if (index > 0) {
        document.querySelector('.circle').remove()
      }
      index--
      if (index > 0) {
        document.querySelector('.square').remove()
      }
      index--
    }
  }
})

bot.addEventListener('click', botOrder)

renderPlayer() // Render początkowy - kalibracja

// Dodać komentarze