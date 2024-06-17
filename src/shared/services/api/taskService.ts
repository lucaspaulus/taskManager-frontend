import { api } from "../../../config/axios"
import { AxiosError } from "axios"
import { toast } from "react-toastify"
import { TaskSchemaType } from "../../schemas/taskSchema"

const checkErrors = (error: unknown) => {
    if (error instanceof AxiosError) {
        if (error.response?.data.message === "Invalid token") {
            localStorage.removeItem("data")
            toast.error("Id inválido")
        } else if (error.response?.data.message === "The user has no tasks.") {
            toast.error("Área de tarefas vazia!")
        } else {
            toast.error(error.response?.data.message)
        }
    }
}
export const addTaskService = async (data: TaskSchemaType, token: string) => {
    try {
        const task = await api.post("/task", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return task.data
    } catch (error) {
        checkErrors(error)
    }
}

export const listTaskService = async (token: string) => {
    try {
        const tasks = await api.get("/task", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return tasks.data
    } catch (error) {
        checkErrors(error)
    }
}

export const editTaskService = async (data: TaskSchemaType, id: string, token: string) => {
    try {
        const tasks = await api.put(`/task/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return tasks.data
    } catch (error) {
        checkErrors(error)
    }
}

export const removeTaskService = async (id: string, token: string) => {
    try {
        await api.delete(`/task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    } catch (error) {
        checkErrors(error)
    }
}
