import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    
    const mockEmail = 'netto@bank.com'
    it('Deve exibir um alert com boas vindas', async() => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${mockEmail}!`)
    })
    
    it('Não deve exibir um alert de boas vindas sem o email', async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo(a)!`)
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})