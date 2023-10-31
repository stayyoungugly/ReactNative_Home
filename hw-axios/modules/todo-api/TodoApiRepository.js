import {axiosClient} from "../../utils/todo/axiosClient";
import {TodoApiModel} from "./TodoApiModel";

export default class TodoApiRepository {
    getDataFromExternalStorage = async () => {
        try {
            const response = await axiosClient
                .get('/todos')
            const newResponse = response.data.map(todoResponse => {
                return new TodoApiModel(
                    todoResponse.userId,
                    todoResponse.id,
                    todoResponse.title,
                    todoResponse.completed
                )
            });
            return {
                todoList: newResponse
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };
}