import TaskCard from "./TaskCard";

type TaskStatus = "pending" | "in-progress" | "completed";

interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Learn JavaScript",
        description:
            "Complete JavaScript fundamentals and practice exercises.",
        status: "completed",
        createdAt: "Aug 30, 2026",
        updatedAt: "Aug 31, 2026",
    },
    {
        id: 2,
        title: "Build REST API",
        description:
            "Create CRUD APIs using Express and MySQL.",
        status: "in-progress",
        createdAt: "Aug 30, 2026",
        updatedAt: "Aug 31, 2026",
    },
    {
        id: 3,
        title: "Practice SQL",
        description:
            "Practice SELECT, INSERT, UPDATE and DELETE queries.",
        status: "pending",
        createdAt: "Aug 31, 2026",
        updatedAt: "Aug 31, 2026",
    },
];

const TaskList = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                    createdAt={task.createdAt}
                    updatedAt={task.updatedAt}
                />
            ))}
        </div>
    );
};

export default TaskList;