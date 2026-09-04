type TaskStatus = "pending" | "in-progress" | "completed";

interface TaskCardProps {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}

const TaskCard = ({
    id,
    title,
    description,
    status,
    createdAt,
    updatedAt,
}: TaskCardProps) => {
    const statusStyles = {
        pending: "bg-amber-50 text-amber-700",
        "in-progress": "bg-blue-50 text-blue-700",
        completed: "bg-emerald-50 text-emerald-700",
    };

    const statusLabels = {
        pending: "Pending",
        "in-progress": "In Progress",
        completed: "Completed",
    };

    return (
        <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        Task #{id}
                    </p>
                </div>

                <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
                >
                    {statusLabels[status]}
                </span>
            </div>

            {/* Description */}
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
                {description}
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="text-xs text-slate-400">
                    <p>Created: {createdAt}</p>
                    <p className="mt-1">Updated: {updatedAt}</p>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </article>
    );
};

export default TaskCard;