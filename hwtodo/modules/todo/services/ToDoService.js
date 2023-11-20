import ToDoRepository from "../repositories/ToDoRepository";
import {ToDoModel} from "../models/ToDoModel";
import type {ToDo} from "../models/ToDoModel";

export default class ToDoService {
    todoRepository;

    constructor() {
        this.todoRepository = new ToDoRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.todoRepository.getDataFromExternalStorage();

        const model = new ToDoModel();
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
        return model.todoList.filter((item: ToDo) => item.completed);
    }
}