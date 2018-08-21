class Food {
    constructor(id, name, ratePerUnit, image) {
        this.id = id;
        this._name = name;
        this.ratePerUnit = ratePerUnit;
        this.image = image;
    }
    set name(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name.toUpperCase(); 
    }
    toString() {
        return `${this.id},${this.name}, ${this.ratePerUnit}`
    }
}

module.exports = Food;