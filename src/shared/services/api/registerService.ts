import { api } from "../../../config/axios"
import { AxiosError } from "axios"
import { toast } from "react-toastify"
import { UserSchemaType } from "../../schemas/userSchema"

export const registerUserService = async (data: UserSchemaType) => {
    try {
        const userCreated = await api.post("/user", data)
        return userCreated.data
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.message)
        }
    }
}
