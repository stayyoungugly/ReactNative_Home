import TodoApiRepository from "./TodoApiRepository";

export default class TodoApiService {
    todoApiRepository;

    constructor() {
        this.todoApiRepository = new TodoApiRepository();
    }

    getAndPrepareDataForStore = async () => {
        const data = this.todoApiRepository.getDataFromExternalStorage();
        return (await data).todoList;
    }

}