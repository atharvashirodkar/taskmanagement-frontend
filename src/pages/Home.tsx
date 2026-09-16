import { useCallback, useEffect, useState } from "react";
import TaskList from "../components/tasks/TaskList";
import { taskService } from "../services/taskService";
import type { Task } from "../types/task.types";
import Header from "../components/Header";
import EmptyTaskState from "@/components/tasks/EmptyTaskState";

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskCount, setTaskCount] = useState(0)

    const pending = tasks.filter(
        (task) => task.status === "pending"
    ).length;

    const inProgress = tasks.filter(
        (task) => task.status === "in-progress"
    ).length;

    const completed = tasks.filter(
        (task) => task.status === "completed"
    ).length;

    // 1. Fetch data on mount (READ)
    const fetchTasks = useCallback(async () => {
        try {
            setLoading(true);

            const data = await taskService.getTasks();

            setTasks(data.data);
            setTaskCount(data.totalTasks);
        } catch (error) {
            console.error("Error fetching items:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchTasks();
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [fetchTasks]);

    return (
        <div>
            <main className="min-h-screen bg-slate-50 text-slate-900">
                {/* Header */}
                <Header />

                {/* Dashboard */}
                <section className="mx-auto w-[calc(100%-40px)] max-w-300 py-8">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                            <span className="text-sm text-slate-500">
                                Total Tasks
                            </span>

                            <strong className="mt-2 block text-[32px] leading-none">
                                {taskCount}
                            </strong>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                            <span className="text-sm text-slate-500">
                                Pending
                            </span>

                            <strong className="mt-2 block text-[32px] leading-none">
                                {pending}
                            </strong>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                            <span className="text-sm text-slate-500">
                                In Progress
                            </span>

                            <strong className="mt-2 block text-[32px] leading-none">
                                {inProgress}
                            </strong>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                            <span className="text-sm text-slate-500">
                                Completed
                            </span>

                            <strong className="mt-2 block text-[32px] leading-none">
                                {completed}
                            </strong>
                        </div>
                    </div>

                    {/* Tasks */}
                    <section className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <div className="flex items-center justify-between gap-5 border-b border-slate-200 px-6 py-5.5">
                            <div>
                                <h2 className="text-[19px] font-semibold">
                                    Your Tasks
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    View and manage your current tasks.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="cursor-pointer bg-transparent text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                View All
                            </button>
                        </div>

                        {loading ?
                            (<div>Loading...</div>)
                            : tasks.length === 0 ? (<EmptyTaskState />)
                                : (<TaskList tasks={tasks} />)
                        }
                    </section>
                </section>
            </main>
        </div>

    );
};

export default Home;