import {makeAutoObservable} from "mobx";
import TodoApiService from "./TodoApiService";

export class TodoApiStore {
    todoList = null;

    isLoading = true;

    todoApiService;

    constructor() {
        makeAutoObservable(this);
        this.todoApiService = new TodoApiService();
    }

    getItems = () => {
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
    };


    setTodoList = value => {
        this.todoList = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}