class File {
    constructor(name, size, type) {
        this._name = name;
        this._size = size;
        this._type = type;
    }

    get name() {
        return this._name;
    }
    
    get size() {
        return this._size;
    }
    
    get type() {
        return this._type;
    }
}