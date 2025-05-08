import http from 'node:http';

// GET => Pegar um recurso do DB
// POST => Criar um recurso no DB
// PUT => Atualizar um recurso no DB
// PATCH => Atualizar uma informação específica de um recurso no DB
// DELETE => Deletar um recurso do DB

// GET /users => Pegando usuarios do DB
// POST /users => Criando um usuario no DB

const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(method, url);
    
    if (method === 'GET' & url === '/users') {
        return res.end("Getting users...")
    }
    
    if (method === 'POST' & url === '/users') {
        return res.end("Creating user...")
    }

    if (method === 'PUT' & url === '/users') {
        return res.end("Updating user...")
    }

    if (method === 'PATCH' & url === '/users') {
        // const toUpdate = prompt("What you want to update: ")
        const toUpdate = "name"

        return res.end(`Updating ${toUpdate} from user...`)
    }

    if (method === 'DELETE' & url === '/users') {
        return res.end("Deleting user...")
    }

    return res.end("Hello World!")
})

server.listen(3333)