import { statesServices } from "./helpers/services.js"
import { debounce, partialize, pipe } from "./operation/opretaions.js"
import { EventEmitter } from "./utils/eventEmitter.js"
const $ = document.querySelector.bind(document)
const form = $('form')
const input = $('#input')
const btn = $('#buscar')

const estado = $('.state')
const death = $('.death')
const inject = $('.infect')
const news = $('.news')


const operation = pipe(
    partialize(debounce, 500)
)
 

const operation1 = operation(()=>
        statesServices
            .sumItems(input.value)
            .then(state => EventEmitter.emit('stateAtual', state))
)

btn.onclick = ()=>{ operation1() 
    console.log(operation1)}

    /*
    state =>{
                news.style.display = 'block'
                estado.innerHTML = state.Province_State
                death.innerHTML = state.Deaths
                inject.innerHTML = state.Confirmed
    */