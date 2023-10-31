import TodoApiRepository from "./TodoApiRepository";

export default class TodoApiService {
    todoApiRepository; // private
    constructor() {
        this.todoApiRepository = new TodoApiRepository();
    }

    getItems = async () => {
        const res = await this.todoApiRepository.getItems();
        return res.data.slice(0, 30);
    };
}
