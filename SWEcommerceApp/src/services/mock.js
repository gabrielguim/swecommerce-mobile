// mock data because the current project don't need to consume an API :)

export default mock = {
    products: [
        {
            id: 0,
            name: 'Produto 1',
            price: 5,
            promotionId: 0
        },
        {
            id: 1,
            name: 'Produto 2',
            price: 20
        },
        {
            id: 2,
            name: 'Produto 3',
            price: 35,
            promotionId: 1,
        }
    ],
    promotions: [
        {
            id: 0,
            type: 'AMOUNT',
            name: '3 por 10 reais',
            value: 10,
            condition: 3
        },
        {
            id: 1,
            type: 'PERCENTAGE',
            name: 'Pague 1 e Leve 2',
            value: 50,
            condition: 2
        }
    ]
}