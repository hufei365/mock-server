
export const Get = (url, params)=>{
    return fetch(url, {
        method: "GET"
    })
}

export const Post = (url, params)=>{
    return fetch(url, {
        body: params,
        method: "POST"
    })
}

export default fetch