export enum Status {
    RECEBIDO = 'RECEBIDO',         // O pedido foi recebido
    PROCESSANDO = 'PROCESSANDO',   // O pedido está sendo processado
    ENVIADO = 'ENVIADO',           // O pedido foi enviado para entrega
    ENTREGUE = 'ENTREGUE',         // O pedido foi entregue ao cliente
    CANCELADO = 'CANCELADO',       // O pedido foi cancelado
    AGUARDANDO_PAGAMENTO = 'AGUARDANDO_PAGAMENTO', // Aguardando pagamento do cliente
    PAGAMENTO_CONFIRMADO = 'PAGAMENTO_CONFIRMADO', // Pagamento confirmado
    REEMBOLSADO = 'REEMBOLSADO',   // O valor do pedido foi reembolsado
    FALHA_ENTREGA = 'FALHA_ENTREGA' // Problemas na entrega do pedido
  }
