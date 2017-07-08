
export function getId(id: string): HTMLElement | null {

    const i: string = id.replace("#", String());

    const el: HTMLElement | null = document.getElementById(i);

    return el;
}