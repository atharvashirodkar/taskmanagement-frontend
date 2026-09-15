import type { Task } from "../../types/task.types";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <div className="px-6 py-5.5">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        created_at={task.created_at}
                        updated_at={task.updated_at}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;