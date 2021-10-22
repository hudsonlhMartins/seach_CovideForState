
import { handleSattus } from "../utils/handleStatus.js"
import { compose, partialize } from "../operation/opretaions.js"
const API = 'https://coronavirus.m.pipedream.net/'

const getData = states => states.rawData
const findItemByValue = (value, items) => items.find(item => item.Province_State == value)



export const statesServices = {
    listAll(){
        return fetch(API).then(handleSattus)
    },

    sumItems(value){
        const findIntem = partialize(findItemByValue, value)
        const sumItems = compose(findIntem, getData)
        
        return this.listAll()
            .then(sumItems)
    }
}
