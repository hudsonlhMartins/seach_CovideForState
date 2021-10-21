const $ = document.querySelector.bind(document)
const form = $('form')
const input = $('#input')
const btn = $('#buscar')

const estado = $('.state')
const death = $('.death')
const inject = $('.infect')
const news = $('.news')


async function getCorona(){
    let res = await fetch('https://coronavirus.m.pipedream.net/')
    let data = await res.json()
    return data
}


btn.onclick = ()=>{
    if(!input.value ==''){
        return new Promise((resolve, reject)=>{
            getCorona().then(data =>{ 
                data.rawData.find(item =>{
                    if(item.Province_State == input.value){
                        return resolve(item)
                    }
                })
                
            })

        }).then(state =>{
            news.style.display = 'block'
            estado.innerHTML = state.Province_State
            death.innerHTML = state.Deaths
            inject.innerHTML = state.Confirmed
        })
       
        
        
    }
}
