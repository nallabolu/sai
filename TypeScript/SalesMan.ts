export class SalesMan {
    private _id: number;
    private _salesManName: string;
    private _mobileNumber: Number;

    constructor(id: number, salesManName: string, mobileNumber: number) {
        this._id = id;
        this._mobileNumber = mobileNumber;
        this._salesManName = salesManName;
    }
    toString(): string {
        return `${this._salesManName},${this._mobileNumber},${this._id}`;
    }



}