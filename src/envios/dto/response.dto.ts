export class ResponseDto<T> {
    data: T;
    message: string;
    status?: number;
    error?: string;

    constructor(data: T, message: string, status: number = 200, error?: string) {
        this.data = data;
        this.message = message;
        this.status = status;
        this.error = error;
    }
}
