import TaskList from "../components/TaskList";

const Home = () => {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex min-h-25 w-[calc(100%-40px)] max-w-300 items-center justify-between gap-6">
                    <div>
                        <h1 className="text-[28px] font-bold">
                            Task Management
                        </h1>

                        <p className="mt-1.5 text-sm text-slate-500">
                            Organize your tasks and keep track of your progress.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="cursor-pointer rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        + Add Task
                    </button>
                </div>
            </header>

            {/* Dashboard */}
            <section className="mx-auto w-[calc(100%-40px)] max-w-300 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                        <span className="text-sm text-slate-500">
                            Total Tasks
                        </span>

                        <strong className="mt-2 block text-[32px] leading-none">
                            22
                        </strong>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                        <span className="text-sm text-slate-500">
                            Pending
                        </span>

                        <strong className="mt-2 block text-[32px] leading-none">
                            7
                        </strong>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                        <span className="text-sm text-slate-500">
                            In Progress
                        </span>

                        <strong className="mt-2 block text-[32px] leading-none">
                            6
                        </strong>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5.5">
                        <span className="text-sm text-slate-500">
                            Completed
                        </span>

                        <strong className="mt-2 block text-[32px] leading-none">
                            9
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

                    <TaskList />
                    {/* Empty State */}

                    {/* <div className="px-5 py-17.5 text-center">
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
                    </div> */}
                </section>
            </section>
        </main>
    );
};

export default Home;