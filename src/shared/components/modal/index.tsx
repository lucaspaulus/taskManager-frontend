import React, { useEffect } from "react"
import { Container, BtnGroup } from "./style"
import { Form } from "../form"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema, TaskSchemaType } from "../../schemas/taskSchema"
import { Button } from "../button"
import { Title } from "../title"

interface ModalProps {
    actionConfirm: (data: TaskSchemaType) => void;
    isOpen: boolean;
    actionClose: () => void;
    modalTitle: string;
    task: TaskSchemaType & { _id: string; };
}
export const Modal: React.FC<ModalProps> = ({ isOpen, actionConfirm, actionClose, modalTitle, task }) => {
    const createTaskForm = useForm<TaskSchemaType>({
        resolver: zodResolver(taskSchema),
    })
    const {
        handleSubmit,
        setValue,
        formState: { errors },
    } = createTaskForm

    useEffect(() => {
        if (isOpen) {
            setValue("title", task.title)
            setValue("description", task.description)
        }
    }, [isOpen, task])
    return (
        <Container showModal={isOpen}>
            <FormProvider {...createTaskForm}>
                <Form onSubmit={handleSubmit(actionConfirm)}>
                    <Title tag="h3">{modalTitle}</Title>
                    <Form.input name="title" placeholder="Insira um título" />
                    <Form.errorMessage error={errors.title} />

                    <Form.input name="description" placeholder="Insira uma descrição" />
                    <Form.errorMessage error={errors.description} />

                    {isOpen && (
                        <BtnGroup>
                            <Button text="Adicionar" variant="primary" />
                            <Button type="button" text="Cancelar" variant="secondary" onClick={actionClose} />
                        </BtnGroup>
                    )}
                </Form>
            </FormProvider>
        </Container>
    )
}
