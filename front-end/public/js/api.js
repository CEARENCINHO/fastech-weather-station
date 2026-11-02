export async function buscarDados() {
    try{
        const resposta = await fetch("https://fastechweatherstation.onrender.com/lerTabela")
        if (!resposta.ok) throw new Error(`Erro na requisição: ${resposta.status}`)
        return await resposta.json()
    } catch (erro){
        console.error("Falha ao buscar dados da API", error)
    }
}

export default buscarDados;