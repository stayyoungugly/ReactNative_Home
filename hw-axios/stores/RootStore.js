import React, {useEffect, useState} from 'react';
import {TodoApiStore} from "../modules/todo-api/TodoApiStore";

class RootStore {
    todoApiStore

    constructor() {
        this.todoApiStore = new TodoApiStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);