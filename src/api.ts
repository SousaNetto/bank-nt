const conta = {
    email: 'netto@bank.com',
    password: '123456',
    name: 'Netto Sousa',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})