import React, { useState } from "react";

type TaskStatus = "pending" | "in-progress" | "completed";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("pending");

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({
            title,
            description,
            status,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                    Create Task
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Add a new task to your task list.
                </p>
            </div>

            {/* Title */}
            <div className="mb-5">
                <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-slate-700"
                >
                    Title
                </label>

                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Enter task title"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>

            {/* Description */}
            <div className="mb-5">
                <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-slate-700"
                >
                    Description
                </label>

                <textarea
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter task description"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>

            {/* Status */}
            <div className="mb-6">
                <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-slate-700"
                >
                    Status
                </label>

                <select
                    id="status"
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value as TaskStatus)
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
                Create Task
            </button>
        </form>
    );
};

export default TaskForm;