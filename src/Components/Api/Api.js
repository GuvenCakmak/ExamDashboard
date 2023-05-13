import React from "react";



function Api() {

    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))

    return (


        <div></div>

    )
};

export default Api;
