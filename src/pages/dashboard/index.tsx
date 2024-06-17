//React
import { useEffect, useState } from "react"

//Router dom
import { useNavigate } from "react-router-dom"

//Icons
import { RiAddFill as AddIcon } from "react-icons/ri"
import { RiChatDeleteLine as DeleteIcon } from "react-icons/ri"
import { FaEdit as EditIcon } from "react-icons/fa"

//Components
import { DefaultLayout } from "../../shared/layouts/defaultLayout"
import { Modal, Text, Title } from "../../shared/components"

//Services
import {
    addTaskService,
    editTaskService,
    listTaskService,
    removeTaskService,
} from "../../shared/services/api/taskService"

//Styles
import * as S from "./style"

//Utils
import { toast } from "react-toastify"

//Schemas
import { TaskSchemaType } from "../../shared/schemas/taskSchema"

type DataType = TaskSchemaType & { _id: string; }

export const Dashboard: React.FC = () => {
    const [task, setTask] = useState<DataType[]>([])
    const [taskSelected, setTaskSelected] = useState<DataType>({
        _id: "",
        description: "",
        title: "",
    })
    const [token, setToken] = useState<string>("")
    const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false)
    const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false)

    const navigate = useNavigate()
    useEffect(() => {
        const data = localStorage.getItem("data")
        if (!data) {
            navigate("/login")
            return
        }
        const dataObject = JSON.parse(data)
        setToken(dataObject.token)
    }, [navigate])

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                const response = await listTaskService(token)
                if (response.success) {
                    setTask(response.data.reverse())
                }
            }
        }
        fetchData()
    }, [token])

    function closeModal(mode: "create" | "update") {
        if (mode === "create") {
            setModalCreateIsOpen(false)
        } else {
            setModalUpdateIsOpen(false)
        }
    }

    function openModal(mode: "create" | "update") {
        if (mode === "create") {
            setModalCreateIsOpen(true)
        } else {
            setModalUpdateIsOpen(true)
        }
    }
    const createConfirm = async (data: TaskSchemaType) => {
        const response = await addTaskService(data, token)

        if (response.success) {
            setTask((currentData) => [response.data, ...currentData])
            toast.success("Tarefa criada com sucesso!")
            closeModal("create")
        }
    }

    const handleDelete = async (id: string) => {
        await removeTaskService(id, token)
        setTask((currentData) => currentData.filter((item) => item._id !== id))
        toast.success("Tarefa deletada com sucesso!")
    }

    const handleUpdate = (item: DataType) => {
        setTaskSelected(item)
        openModal("update")
    }
    const updateConfirm = async (data: TaskSchemaType) => {
        const taskIndex = task.findIndex((item) => item._id === taskSelected._id)
        if (taskIndex !== -1) {
            const taskData = [...task]
            taskData[taskIndex] = { _id: taskSelected._id, ...data }

            const response = await editTaskService(data, taskSelected._id, token)
            if (response.success) {
                setTask(taskData)
                toast.success("Tarefa atualizada com sucesso!")
                closeModal("update")
            }
        }
    }

    return (
        <DefaultLayout isDashboard>
            <Modal
                modalTitle="Criar Task"
                isOpen={modalCreateIsOpen}
                actionClose={() => closeModal("create")}
                actionConfirm={createConfirm}
                task={taskSelected}
            />
            <Modal
                modalTitle="Editar Task"
                isOpen={modalUpdateIsOpen}
                actionClose={() => closeModal("update")}
                actionConfirm={updateConfirm}
                task={taskSelected}
            />
            <S.Container>
                <S.Tools>
                    <h1>Tasks</h1>
                    <AddIcon onClick={() => openModal("create")} />
                </S.Tools>
                {task.length ? (
                    <S.CardsSection>
                        {task.map((item) => (
                            <S.Card key={item._id}>
                                <S.CardHeader>
                                    <h1>{item.title}</h1>
                                    <div className="iconsGroup">
                                        <EditIcon onClick={() => handleUpdate(item)} />
                                        <DeleteIcon className="icon-delete" onClick={() => handleDelete(item._id)} />
                                    </div>
                                </S.CardHeader>
                                <hr />
                                <S.CardBody>
                                    <p>{item.description}</p>
                                </S.CardBody>
                            </S.Card>
                        ))}
                    </S.CardsSection>
                ) : (
                    <S.CardSectionEmpty>
                        <Title tag="h2">Você não tem nenhuma tarefa.</Title>
                        <Text size="1">Adicione uma tarefa.</Text>
                        <AddIcon onClick={() => openModal("create")} />
                    </S.CardSectionEmpty>
                )}
            </S.Container>
        </DefaultLayout>
    )
}
