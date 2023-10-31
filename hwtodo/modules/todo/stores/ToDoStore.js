import {makeAutoObservable} from "mobx";
import ToDoService from "../services/ToDoService";

export class ToDoStore {
    todoEntity = null;

    isLoading = false;

    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new ToDoService();
    }

    getToDoObjectFromService = () => {
        const model = this.todoService.getAndPrepareDataForStore();
        this.setToDoEntity(model);
    }

    actionGetCompleted = (model) => {
        return this.todoService.getCompletedToDo(model);
    }

    actionAdd = (value) => {
        this.setIsLoading(true);
        const model = this.todoService.addToDo(this.todoEntity, value);
        this.setToDoEntity(model);
        this.setIsLoading(false)
    };

    actionChange = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.changeToDo(this.todoEntity, index);
        this.setToDoEntity(model);
        this.setIsLoading(false)
    };


    actionDelete = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.deleteToDo(this.todoEntity, index);
        this.setToDoEntity(model);
        this.setIsLoading(false)
    };

    setToDoEntity = value => {
        this.todoEntity = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}