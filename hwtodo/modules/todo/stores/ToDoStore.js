import {makeAutoObservable} from "mobx";
import ToDoService from "../services/ToDoService";

export class ToDoStore {
    todoModel = null

    isLoading = false;

    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new ToDoService();
    }

    getToDoObjectFromService = () => {
        const model = this.todoService.getAndPrepareDataForStore();
        this.setToDoModel(model);
    }

    actionGetCompleted = () => {
        const completed = this.todoService.getCompletedToDo(this.todoModel);
        console.log(completed)
        return completed;
    }

    actionAdd = (value) => {
        this.setIsLoading(true)
        const model = this.todoService.addToDo(this.todoModel, value)
        this.setToDoModel(model)
        console.log(this.todoModel)
        this.setIsLoading(false)
    };

    actionChange = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.changeToDo(this.todoModel, index);
        this.setToDoModel(model);
        console.log(this.todoModel)
        this.setIsLoading(false)
    };


    actionDelete = (index) => {
        this.setIsLoading(true);
        const model = this.todoService.deleteToDo(this.todoModel, index);
        this.setToDoModel(model);
        console.log(this.todoModel)
        this.setIsLoading(false)
    };

    setToDoModel = value => {
        this.todoModel = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}