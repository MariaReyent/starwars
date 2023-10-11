
const getPeople = async (page) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error; 
    }
}

const getStarshipsUrl = async (url) =>{
    const response = await fetch (`https://swapi.dev/api/starships/`+url);
    return await response.json();
}



export {getPeople, getStarshipsUrl}