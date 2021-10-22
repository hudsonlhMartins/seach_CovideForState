export const handleSattus = (res) =>{
    return res.ok ? res.json() : Promise.reject(res.statusText)
}
 