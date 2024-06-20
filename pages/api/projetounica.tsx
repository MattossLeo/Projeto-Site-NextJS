import { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Model, Document } from 'mongoose';

const url = "mongodb+srv://leonardosousamattos:wVX16FuqKP0JIoX3@cluster0.yuhfgua.mongodb.net/?retryWrites=true&w=majority";

// Definir a interface para o documento da coleção ProjetoUnica
interface IProjetoUnica extends Document {
    _id: mongoose.Types.ObjectId;
    question: string;
    answer: string;
}

// Modelo para acessar a coleção ProjetoUnica
let ProjetoUnica: Model<IProjetoUnica>;

// Conectar ao MongoDB e definir o modelo
async function conectarMongoDB() {
    try {
        await mongoose.connect(url);
        console.log('Conectado ao MongoDB');

        // Definir o modelo apenas se ainda não estiver definido
        if (!mongoose.models.ProjetoUnica) {
            ProjetoUnica = mongoose.model<IProjetoUnica>('ProjetoUnica', new mongoose.Schema({
                _id: mongoose.Schema.Types.ObjectId,
                question: String,
                answer: String,
            }, { collection: 'ProjetoUnica' }));
        } else {
            ProjetoUnica = mongoose.models.ProjetoUnica as Model<IProjetoUnica>;
        }

        // Após a definição do modelo, chame a função para listar os documentos
        await listarDocumentos();
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB', err);
    } finally {
        mongoose.disconnect();
    }
}

async function listarDocumentos() {
    try {
        if (!ProjetoUnica) {
            throw new Error('Modelo ProjetoUnica não definido');
        }
        // Consultar a coleção ProjetoUnica para todos os documentos
        const documentos = await ProjetoUnica.find({}).exec();

        console.log('Documentos encontrados:', documentos);
    } catch (err) {
        console.error('Erro ao acessar a coleção ProjetoUnica:', err);
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Conectar ao MongoDB e iniciar o processo de listagem de documentos
    await conectarMongoDB();

    res.status(200).json({ message: 'Conectado ao MongoDB' });
}