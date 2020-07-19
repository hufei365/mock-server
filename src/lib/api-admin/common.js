function setResponse(data = {}, code = 0,  msg = "OK"){
    return JSON.stringify({
        code,
        data,
        msg
    })
}

module.exports = {
    setResponse
}