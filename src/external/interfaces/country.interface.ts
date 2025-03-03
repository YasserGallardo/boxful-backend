export interface Country {
    flags: {
        png: string;
        svg: string;
    };
    name: {
        common: string;
    };
    idd: {
        root?: string;
        suffixes?: string[];
    };
}
