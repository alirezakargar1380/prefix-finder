interface IPrefix {
    strs: Array<string>
}

class prefix implements IPrefix {
    public strs: Array<string>
    constructor(strs: Array<string>) {
        this.strs = strs
    }
}