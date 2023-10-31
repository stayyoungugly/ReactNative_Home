import {makeAutoObservable} from "mobx";
import TodoApiService from "./TodoApiService";

export class TodoApiStore {
    todoList = null;

    isLoading = false;

    todoApiService;

    constructor() {
        makeAutoObservable(this);
        this.todoApiService = new TodoApiService();
    }

    getTodosFromService = async () => {
        this.setIsLoading(true)
        const model = this.todoApiService.getAndPrepareDataForStore();
        this.setTodoList(await model);
        this.setIsLoading(false)
    };

    setTodoList = value => {
        this.todoList = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}