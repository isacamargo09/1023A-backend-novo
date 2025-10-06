import { Request, Response } from "express";
import db from "../database/mongodb";
import { ObjectId } from "mongodb";

interface ItemCarrinho {
    produtoId: string;
    quantidade: number;
    precoUnitario: number;
    nome: string;
}

interface Carrinho {
    usuarioId: string;
    itens: ItemCarrinho[];
    dataAtualizacao: Date;
    total: number;
}
class CarrinhoController {
    //adicionarItem
    async adicionarItem(req:Request, res:Response) {
        const { usuarioId, produtoId, quantidade, precoUnitario, nome } = req.body;
        console.log (usuarioId, produtoId, quantidade, precoUnitario, nome);
    }
        //Buscar o produto no banco de dados
        Adicionar Carrinho (req,res)
        nome,produtoId,usuarioId,quantidade,precoUnitario=req.body

        const Carrinho = db.collection('carrinho').findOne({usuarioId : ObjectId.createFromBase64(usuarioId)})
        if (!Carrinho) {
            const carrinho = {
                usuarioId: ObjectId
                itens: [{
                    nome: nome,
                    quantidade: quantidade,
                    precoUnitario: preco
                }],
                total: quantidade * precoUnitario,
                modificação: new Date()
            }
        //Pegar o preço do produto
        //Pegar o nome do produto


        // Verificar se um carrinho com o usuário já existe
        const carrinhoExistente = await db.collection<Carrinho>("carrinhos").find({ usuarioId }).toArray();

        // Se não existir deve criar um novo carrinho

        // Se existir, deve adicionar o item ao carrinho existente

        // Calcular o total do carrinho

        // Atualizar a data de atualização do carrinho




    //removerItem
    //atualizarQuantidade
    //listar
    //remover                -> Remover o carrinho todo

}
export default new CarrinhoController();