export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    created_at: string;
    updated_at: string;
}

export interface TaskFilter {
    title?: string,
    status?: string,
    from?: string,
    to?: string,
    page?: number,
    limit?: number
}

export interface GetTasksResponse {
    success: boolean,
    message: string,
    data: Task[]
    totalTasks: number
}

export interface CreateTaskData {
    title: string;
    description: string;
    status?: TaskStatus;
}

export interface UpdateTaskData {
    title?: string;
    description?: string;
    status?: TaskStatus;
}