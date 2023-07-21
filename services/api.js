const sendMensaje = (nombre, mensaje) => {
    return fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, mensaje})
    })
}

const sendFormProducts = (data) => {
    return fetch("http://localhost:3000/data", {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

const users = () => fetch("http://localhost:3000/users").then(response => response.json())

export const api = {
    sendMensaje,
    users,
    sendFormProducts
}