const conta = {
    email: 'netto@bank.com',
    password: '123456',
    name: 'Netto'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})