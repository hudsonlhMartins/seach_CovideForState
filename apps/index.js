import { statesServices } from "./helpers/services.js"
import { debounce, partialize, pipe } from "./operation/opretaions.js"
import { EventEmitter } from "./utils/eventEmitter.js"
const $ = document.querySelector.bind(document)
const input = $('#input')
const btn = $('#buscar')



const operation = pipe(
    partialize(debounce, 500)
)
 

let a =5
console.log(a++)
console.log(++a)

const operation1 = operation(()=>
        statesServices
            .sumItems(input.value)
            .then(state => EventEmitter.emit('stateAtual', state))
            .catch(res => {console.log(res)
                alert('estado Não encontrado, confira se escreveu corretamente com letra Maiuscula e minuscula. e não pode conter acentos nomes dos Estados')
            })
)

btn.onclick = ()=>{ operation1() 
    console.log(operation1)}


