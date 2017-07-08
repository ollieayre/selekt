declare namespace NodeJS {
  export interface Global {
    document: Document | null
  }
}

interface HTMLCollection {
    first(): Element
    nth(index: number): Element
}