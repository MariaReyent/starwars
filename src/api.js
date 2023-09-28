
// const getPeople = async ()=>{
//     return  await fetch(`https://swapi.dev/api/people/`)
//     .then(response=> {
//        return  response.json()})
       
//     .then((data)=>{
//         return  data;
//     })
// }

const getPeople = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error; // You might want to handle this error further up the call stack
    }
}


export {getPeople}