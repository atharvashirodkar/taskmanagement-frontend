import api from "../api/axiosInstance";
import type { CreateTaskData, GetTasksResponse, Task, TaskFilter, TaskStatus, UpdateTaskData } from "../types/task.types";

export const taskService = {
    // GET ALL TASKS
    getTasks: async (taskFilter?: TaskFilter): Promise<GetTasksResponse> => {

        const response = await api.get("");
        return response.data;
    },

    // GET TASK BY ID
    getTaskById: async (taskId: number): Promise<Task> => {
        const response = await api.get(`/${taskId}`);
        return response.data.data;
    },

    // CREATE TASK
    createTask: async (
        taskData: CreateTaskData
    ): Promise<number> => {
        const response = await api.post("", taskData);
        return response.data.taskId;
    },

    // UPDATE TASK
    updateTask: async (
        taskId: number,
        taskData: UpdateTaskData
    ): Promise<void> => {
        await api.put(`/${taskId}`, taskData);
    },

    // DELETE TASK
    deleteTask: async (taskId: number): Promise<void> => {
        await api.delete(`/${taskId}`);
    },
}
