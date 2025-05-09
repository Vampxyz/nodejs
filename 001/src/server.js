import http from 'node:http';

// GET => Pegar um recurso do DB
// POST => Criar um recurso no DB
// PUT => Atualizar um recurso no DB
// PATCH => Atualizar uma informação específica de um recurso no DB
// DELETE => Deletar um recurso do DB

// GET /users => Pegando usuarios do DB
// POST /users => Criando um usuario no DB

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(method, url);
    
    if (method === 'GET' & url === '/users') {

        return res
        .setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .end(JSON.stringify(users))
    }
    
    if (method === 'POST' & url === '/users') {
        users.push({
            id: 2,
            name: "Tiago",
            age: 22,
            email: "Tiago2222@gmail.com"
        })

        return res.writeHead(201).end()
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

    return res
    .writeHead(404)
    .end('Route not found')
})

server.listen(3333)