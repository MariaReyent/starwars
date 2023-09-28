
const getPeople = async ()=>{
    //const response =  fetch (`http https://swapi.dev/api/people/`);
    // const data=  response.json()
    // console.log(data)
    return   fetch(`http https://swapi.dev/api/people/`).then(response=> {
       console.log(response); 
    return response.json()}).then(data=>{
        return data;
    })
}


export {getPeople}