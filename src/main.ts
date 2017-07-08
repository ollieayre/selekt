
class GetClass {

    private elems: HTMLCollectionOf<Element>;

    constructor(className: string) {
        this.elems = document.getElementsByClassName(className.replace(".", ""));
    }

    public first(): Element {
        return this.elems[0] || null;
    }

    public nth(index: number): Element {
        return this.elems[index] || null;
    }
}


function getClass(className: string): GetClass {
    return new GetClass(className);
}

 export {
     getClass
 }