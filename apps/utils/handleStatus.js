export const handleSattus = (res) =>{
    return res.ok ? res.json() : Promise.reject(res => {res.statusText
        console.log('não foi posivel error 404, estado errado')
    })
}
 