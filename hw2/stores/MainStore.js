import React from "react";
import {ToDoStore} from "./ToDoStore";

class MainStore {
    todoStore;

    constructor() {
        this.todoStore = new ToDoStore();
    }
}

export const mainStore = new mainStore();

export const storesContext = React.createContext(mainStore)