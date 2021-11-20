// async await

const getTodos = async () => {
    const response = await fetch("./todos.json");

    if(response.status !== 200) {
        throw new Error("cannot fecth the data");
    }

    const data = await response.json();
    
    return data;
}

getTodos()
    .then(data => console.log("resolved: ", data))
    .catch(err => console.log("rejected: ", err.message));

// fetch("./todos.json").then(response => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("rejected", err);
// });
