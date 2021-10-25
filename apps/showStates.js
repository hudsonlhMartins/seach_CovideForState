import { EventEmitter } from "./utils/eventEmitter.js";

let States = []

const setList = (array)=>{
    let table = `<table class="table table-striped table-hover"><tr >
    <th>Pais</th>
    <th>Estado</th>
    <th>Casos</th>
    <th>Mortes</th>
    </tr>
</thead>`

    array.forEach((state, index)=>{
        table += `
        <tr>
        <td>${state.pais}</td>
        <td>${state.estado}</td>
        <td>${state.casos}</td>
        <td>${state.mortes}</td>
    </tr>
        `
    })
    table += '</table>'

    document.querySelector('.news').innerHTML = table
}

EventEmitter.on('stateAtual', state =>{ 
    States.push({'pais':state.Country_Region, 'estado': state.Province_State, 'casos': state.Confirmed, 'mortes': state.Deaths})
    setList(States)})


/*
    state.Country_Region
    state.Province_State
    state.Confirmed
    state.Deaths

*/