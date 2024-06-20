import mongoose from "mongoose";

const dbname = 'ProjetoUnica';
const url = "mongodb+srv://leonardosousamattos:wVX16FuqKP0JIoX3@cluster0.yuhfgua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then(async () => {
    console.log('Conectado ao MongoDB');
    await listDatabases();
})
.catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
    process.exit(1); // Encerra o processo Node.js em caso de erro de conexão
});

async function listDatabases() {
    try {
        const admin = mongoose.connection.getClient();
        const databasesList = await admin.db().admin().listDatabases();
        console.log('Bancos de dados disponíveis:');
        databasesList.databases.forEach(db => console.log(`- ${db.name}`));
    } catch (err) {
        console.error('Erro ao listar bancos de dados:', err);
    }
}