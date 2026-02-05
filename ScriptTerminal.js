async function BuscarUsuarios(){

    try {

        const Resultado = await fetch("https://jsonplaceholder.typicode.com/users");

        const dados = await Resultado.json();

        return dados;
    
    } catch (error) {
        console.log("Algo deu errado. Erro: ", error.message);
        
    }
}

function SepararEmails(usuarios){
    return usuarios.map(usuario => ({
        nome: usuario.name,
        email: usuario.email
    }));
}

async function MostrarNomeEmails(){
    try {
        const usuarios = await BuscarUsuarios();
        
        const contatos = SepararEmails(usuarios);
        
        console.log("Emails: ", contatos)
    
    } catch (error) {

        console.log("Ocorreu um erro na solicitação: ", error.message)
        
    }
}
MostrarNomeEmails()

