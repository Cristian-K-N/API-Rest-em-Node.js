import express from 'express';

const app = express();

//pegar os dados
async function BuscarUsuarios() {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resultado.json();
    return dados;
}

//separando email e nome
function SepararEmails(usuarios) {
    return usuarios.map(usuario => ({
        nome: usuario.name,
        email: usuario.email
    }));
}

//rota
app.get('/usuarios/contatos', async (req, res) => {
    try {
        const usuarios = await BuscarUsuarios();
        const contatos = SepararEmails(usuarios);
        res.json(contatos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

//servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});