import React from "react";
import {ToDoStore} from "../modules/todo/stores/ToDoStore";

class MainStore {
    todoStore;

    constructor() {
        this.todoStore = new ToDoStore();
    }
}

export const mainStore = new MainStore();

export const storesContext = React.createContext(mainStore)