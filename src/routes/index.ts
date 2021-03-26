import { Router } from 'express';
import produtoRoutes from './produtos.routes'
import grupoProdutoRoutes from './grupoProd.routes'
import subgrupoProdutoRoutes from './subgrupoProd.routes'
import clienteRoutes from './clientes.routes'
import vendasRoutes from './venda.routes'
import ultimoid from './vendaUltima.routes'
import ItemVendasRoutes from './itemvenda.routes'
import ItemVendasPorVendaRoutes from './itemVendaPorVenda.routes'
import idsCli_CaixaRoutes from './idCli_IdVenda.routes'
import formapagamento from './formaPagamento.routes'
import formapagamentoVenda from './formaPagamentoVenda.routes'
import formapagamentoVendaDel from './formaPagamentoPorVenda.routes'
import funcionarioController from './funcionario.routes'
import sessionsRouter from './session.routes';
import usersRouter from './users.routes';


const routes = Router();
routes.use("/users",usersRouter)
routes.use("/sessions",sessionsRouter)
routes.use("/cliente", clienteRoutes)
routes.use("/vendedor", funcionarioController)
routes.use("/itemvenda", ItemVendasRoutes)
routes.use("/itemvendaVenda", ItemVendasPorVendaRoutes)
routes.use("/idCli_Caixa", idsCli_CaixaRoutes)
routes.use("/venda", vendasRoutes)
routes.use("/ultimavenda", ultimoid)
routes.use("/produto", produtoRoutes.produtoRoutes)
routes.use("/estoque", produtoRoutes.produtoRoutesEestoqueRemove)
routes.use("/grupoproduto", grupoProdutoRoutes)
routes.use("/subgrupoproduto", subgrupoProdutoRoutes)
routes.use("/produtoEstoque", produtoRoutes.produtoRoutesEestoqueAdd)
routes.use("/formapagamento", formapagamento)
routes.use("/formapagamentovenda", formapagamentoVenda)
routes.use("/formapagamentovendaUpDate", formapagamentoVendaDel)

export default routes;

