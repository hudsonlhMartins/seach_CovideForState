export const debounce = (mille, fn) =>{
    let timer = 0
    return ()=>{
        clearInterval(timer)
        timer = setTimeout(fn, mille)
    }
}

export const compose = (...fns) => value =>{
    return fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value
    )
}

export const pipe = (...fns) => value =>{
    return fns.reduce((previousValue, fn) =>
        fn(previousValue), value
    )
}

export const partialize = (fn, ...arg) => 
    fn.bind(null, ...arg)