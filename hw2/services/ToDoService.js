import ToDoRepository from "../repositories/ToDoRepository";
import {ToDoEntity} from "../entities/ToDoEntity";

export default class ToDoService {
    todoRepository;

    constructor() {
        this.todoRepository = new ToDoRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.todoRepository.getDataFromExternalStorage();

        const model = new ToDoEntity();
        model.todoList = data.defaultToDoList;

        return model;
    }

    addToDo = (model, value) => {
        model.todoList.push(value);
        return model;
    }

    deleteToDo = (model, index) => {
        model.todoList.splice(index, 1)
        return model;
    }

    changeToDo = (model, index) => {
        model.todoList[index].completed = !model.todoList[index].completed;
        return model;
    }

    getCompletedToDo = (model) => {
        return model.filter((item) => item.completed);
    }
}