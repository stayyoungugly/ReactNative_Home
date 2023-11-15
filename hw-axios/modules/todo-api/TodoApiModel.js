export class TodoApiModel {
    userId;
    id;
    title;
    completed;

    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}