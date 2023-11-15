import TodoApiRepository from "./TodoApiRepository";
import LocalRepository from "../../storage/local/LocalRepository";
import {TodoApiModel} from "./TodoApiModel";

export default class TodoApiService {
    todoApiRepository;
    localRepository;
    constructor() {
        this.todoApiRepository = new TodoApiRepository();
        this.localRepository = new LocalRepository('Todo')
    }

    setItems = async () => {
        const todoApi = await this.todoApiRepository.getItems();
        const todoModel = todoApi.data.slice(0, 30).map(item =>
            new TodoApiModel(item.userId, item.id, item.title, item.completed)
        );
        return this.localRepository.setItems(todoModel);
    };

    getItems = async () => {
        return this.localRepository.getItems();
    };
    removeItems = () => {
        return this.localRepository.removeItems();
    }
}
