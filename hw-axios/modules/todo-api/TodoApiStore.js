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

    getItems = async () => {
        this.setIsLoading(true);

        this.todoApiService
            .getItems()
            .then(result => {
                this.setTodoList(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    }

    loadItems = async () => {
        this.setIsLoading(true);
        this.todoApiService.setItems()
            .then(this.getItems)
    }

    removeItems = async () => {
        this.todoApiService.removeItems()
            .then(() => this.setTodoList(null));
    }

    setTodoList = value => {
        this.todoList = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}