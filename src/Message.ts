export class Message {
    private readonly msg: string;

    public constructor(msg: string) {
        this.msg = msg;
    }

    public output(): void {
        console.log(this.msg);
    }
}
