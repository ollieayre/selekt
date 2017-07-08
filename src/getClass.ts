
export function getClass(className: string): HTMLCollectionOf<Element> {
    
    const cls: string = className.replace(".", String());
    const els: HTMLCollectionOf<Element> = document.getElementsByClassName(cls);

    els.first = function first() {
        return els[0] || null;
    }

    els.nth = function nth(index: number) {
        return els[index] || null;
    }

    return els;
}

