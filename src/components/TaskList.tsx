export type TaskListPropsType = {
    data: DataProps
}

type DataProps = {
    title: string,
    tasks: TaskList[],
    students: string[]
}

type TaskList = {
    taskId: number,
    title: string,
    isDone: boolean
}


export const TaskList = (props: TaskListPropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.data.students.map(el => {
                    return <li>{el}</li>
                })}
            </ul>
        </div>
    )
}
