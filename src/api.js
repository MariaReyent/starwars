
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

const getPerson= async(id)=>{
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching people:', error);
        throw error; 
  }
}

const getStarships = async(url)=>{
   try {
    const response = await fetch(url)
    const data = await response.json();
    return data;
    
   } catch (error) {
    console.error('Error fetching people:', error);
    throw error;
   }
}

const getVehicles= async (url)=>{
    try {
        const response = await fetch(url)
    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
}


export {getPeople, getPerson, getStarships, getVehicles}