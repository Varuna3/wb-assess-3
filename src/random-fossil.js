import axios from 'axios'

const RAMBUNCTIOUS_racoon = document.getElementById('random-fossil-image')
const OBFUSCATED_octopus = document.getElementById('random-fossil-name')
const BODACIOUS_barracuda = document.getElementById('get-random-fossil')

BODACIOUS_barracuda.addEventListener('click', async e => {
  const resp = await axios.get('/random-fossil.json')
  RAMBUNCTIOUS_racoon.innerHTML = `<img src="${resp.data.img}" />`
  OBFUSCATED_octopus.innerText = `This uhn right herr is a dah gum ${resp.data.name}.`
})
