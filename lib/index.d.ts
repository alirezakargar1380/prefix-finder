interface PrefixReport {
    [key: string]: {
        prefix: string;
        array: Array<string>;
    };
}
interface IPrefix {
    strs: Array<string>;
    isPrefix(): boolean;
    findPrefix(): string;
    findAllPrefix(): PrefixReport;
}
export default class prefix implements IPrefix {
    strs: Array<string>;
    constructor(strs: Array<string>);
    isPrefix(): boolean;
    findPrefix(): string;
    findAllPrefix(): PrefixReport;
}
export {};
