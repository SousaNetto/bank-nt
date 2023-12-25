import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const bankNt = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('bankNt')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('bankNt', JSON.stringify(bankNt))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(bankNt)
        expect(mockSetItem).toHaveBeenCalledWith('bankNt', JSON.stringify(bankNt))
    })
}) 