export class Message {
    private readonly msg: string;

    public constructor(msg: string) {
        this.msg = msg;
    }

    public output(): void {
        // tslint:disable-next-line:no-console
        console.log(this.msg);
    }

    public value(): string {
        return this.msg;
    }
}
