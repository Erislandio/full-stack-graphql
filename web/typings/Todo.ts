export interface Todo {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    done: boolean;
}

export interface CrateTodoInput {
    title: string;
    description: string; 
} 