import { useContext } from 'react'
import { api } from '../api'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'

export const login = async (email: string):Promise<boolean> => {
    const data:any = await api

    if(email !== data.email) {
        return false
    }

    return true
}