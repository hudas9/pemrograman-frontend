const download = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
        return result.json();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}

download();