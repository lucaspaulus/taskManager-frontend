import { AxiosError } from "axios"
import { api } from "../../../config/axios"
import { toast } from "react-toastify"
import { LoginSchemaType } from "../../schemas/loginSchema"

export const loginService = async (data: LoginSchemaType) => {
    try {
        const userLogged = await api.post("/login", data)
        return userLogged.data
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.message)
        }
    }
}
