import './style.css'

// region Test babel

/*
class MyClass {
  #value = 1
  constructor(value) {
    this.#value += value
  }

  get value() {
    return this.#value
  }
}

const value = 1

console.log(new MyClass(`My ${value} Class`).value)

var set = new Set(['Array.from', 'set'])

console.log(Array.from(set))

console.log('endsWith', 'qwe123'.endsWith('123'))
*/

// endregion

const html = '<h1>Hello Vite!</h1>'

document.querySelector('#app').innerHTML = html
