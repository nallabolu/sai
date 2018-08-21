function addInfo(target: any) {
    target.prototype.age=45;
    console.log(target);
    return target;
}


@addInfo
class ExampleDeco {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    toString(): string {
        return this._name;
    }
}

const obj = new ExampleDeco("Sai");
console.log(obj.toString());
console.log(obj.age);