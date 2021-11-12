//Para Cadastrar
async function EnviarDados(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

//Para Editar
async function EnviarDados(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

//Para Deletar
async function EnviarDados(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

//Para Receber dados sem precisar de autorização
async function ReceberDados(url = '') {
    const response = await fetch(url, {
        method: 'get',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
