import { getId } from "../src/getId";
import { JSDOM } from "jsdom";
import { expect } from "chai";

describe("getId", () => {

    const testDOM = `<p id="test-one">first</p><p id="test-two">second</p>`;

    beforeEach(() => {
        global.document = new JSDOM(testDOM).window.document;
    });

    afterEach(() => {
        global.document = null;
    });

    it("can find an element by ID", () => {

        const elHash = getId("#test-two");
        const elNoHash = getId("test-two");

        if(elHash) {
            expect(elHash.innerHTML).to.equal("second");
        } else {
            expect.fail(null, null, "elHash was not an element");
        }

        if(elNoHash) {
            expect(elNoHash.innerHTML).to.equal("second");
        } else {
            expect.fail(null, null, "elNoHash was not an element");
        }

    })
})