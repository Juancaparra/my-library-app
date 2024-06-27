class pedido {
    idPedido: string;
    fechaPedido: string;
    cliente: number;
    itemsPedido: string;
    estadoPedido: string;
    totalPedido: string;



    constructor(
    idPedido: string,
    fechaPedido: string,
    cliente: number,
    itemsPedido: string,
    estadoPedido: string,
    totalPedido: string,){

        this.idPedido=idPedido;
        this.fechaPedido=fechaPedido;
        this.cliente=cliente;
        this.itemsPedido=itemsPedido;
        this.estadoPedido=estadoPedido;
        this.totalPedido=totalPedido;

        }
}