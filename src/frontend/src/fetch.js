
export const Get = (url, params)=>{
    return fetch(url, {
        method: "GET"
    }).then(handleRequest)
}

export const Post = (url, params)=>{
    return fetch(url, {
        body: JSON.stringify(params),
        method: "POST",
        headers: {
            'content-type': 'application/json'
        } 
    }).then(handleRequest)
}

function handleRequest(res){
    return res.json().then(d=>{
        if(d.code === 0 ){
            return d.data
        } else {
            return d;
        }
    })
}

export default fetch