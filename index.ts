interface IPrefix {
    strs: Array<string>
    isPrefix(): boolean
}

class prefix implements IPrefix {
    public strs: Array<string>
    constructor(strs: Array<string>) {
        this.strs = strs
    }

    isPrefix(): boolean {
        let str0: string = this.strs[0]
        for (let char of this.strs) {
            let i = 0
            while (str0.length > i && char[i] === str0[i]) { i++ }
            str0 = str0.slice(0, i)
        }
        return (str0) ? true : false
    }
}