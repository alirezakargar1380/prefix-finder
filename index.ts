interface IPrefix {
    strs: Array<string>
    isPrefix(): boolean
    findPrefix(): string
    findAllPrefix(): PrefixReport
}

export default class prefix implements IPrefix {
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

    findPrefix(): string {
        let str0: string = this.strs[0]
        for (let char of this.strs) {
            let i = 0
            while (str0.length > i && char[i] === str0[i]) { i++ }
            str0 = str0.slice(0, i)
        }
        return str0
    }

    findAllPrefix(): PrefixReport {
        let strs = [...this.strs]

        // sort strings by english alphabet
        strs.sort((a, b) => a.localeCompare(b))

        let str0: string = strs[0]
        let map: PrefixReport = {}
        let array: string[] = []

        for (let char of strs) {
            let i = 0
            if (char[i] !== str0[i]) {
                map[str0] = {
                    prefix: str0,
                    array: array
                }

                array = []
                str0 = char
                array.push(char)
            } else array.push(char)

            while (str0.length > i && char[i] === str0[i]) { i++ }
            str0 = str0.slice(0, i)
        }

        map[str0] = {
            prefix: str0,
            array: array
        }

        return map
    }
}