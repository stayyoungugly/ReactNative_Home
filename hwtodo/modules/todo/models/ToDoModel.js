export type ToDo = {
    text: string;
    index: number;
    completed: boolean;
};

export class ToDoModel {
    todoList: ToDo[];
}