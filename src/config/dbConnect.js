import mysql from 'mysql2'

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '93g@Fvk7fdc',
    database: 'estacao_meteo'
})

export default conexao.promise()