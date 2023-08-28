exports.handler = async function(){
    const POKE_URL = 'https://pokeapi.co/api/v2/region/kanto'
    const response = await fetch(POKE_URL)
    const data = await response.json()
    return {
        statusCode:200,
        body:JSON.stringify(data)
    }
} 