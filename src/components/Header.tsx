const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
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
        </>
    )
}

export default Header