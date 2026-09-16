const EmptyTaskState = () => {
    return (
        <div className="px-5 py-17.5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
                ✓
            </div>

            <h3 className="mt-4 text-base font-medium">
                No tasks to display
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                Create a task to get started.
            </p>

            <button
                type="button"
                className="mt-5 cursor-pointer rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
                Create Task
            </button>
        </div>
    );
};

export default EmptyTaskState