import { getClass } from "../getClass";
import { JSDOM } from "jsdom";
import { expect } from "chai";

describe("getClass", () => {

    const testDOM = `<p class="test-class">first</p><p class="test-class">second</p><p class="test-class">third</p>`;

    beforeEach(() => {
        global.document = new JSDOM(testDOM).window.document;
    });

    afterEach(() => {
        global.document = null;
    });

    it("can find elements with a class name", () => {

        const els = getClass("test-class");
        expect(els.length).to.equal(3);
    });

    it("getClass.first can return the first el in the list", () => {

        const el = getClass("test-class").first();
        expect(el.innerHTML).to.equal("first");
    });
    
    it("getClass.nth can return a given el in the list", () => {

        const el = getClass("test-class").nth(1);
        expect(el.innerHTML).to.equal("second");
    });
})