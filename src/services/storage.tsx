interface IBankNt {
    login: boolean
}

const bankNt = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('bankNt')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('bankNt', JSON.stringify(bankNt))
}

export const changeLocalStorage = (bankNt: IBankNt): void => {
    localStorage.setItem('bankNt', JSON.stringify(bankNt))
}