import AxiosClient from "../../utils/todo/AxiosClient";

export default class TodoApiRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getItems = () => {
        return this.apiClient.get({url: '/todos'});
    };
    changeItem = (item) => {
        return this.apiClient.post({
            url: '/todos/1',
            data: item
        });
    };
}