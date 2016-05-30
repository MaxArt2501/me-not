"use strict";

if (typeof Proxy === "undefined") {
    console.warn("This module work only in environments that support Proxy - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy");

    return;
}

const R = require("..");
const expect = require("expect.js");

describe("About me-not", () => {
    it("Getting a module must work", () => expect(R.mocha).to.be.ok());

    it("Getting an already required module must return the same object", () => {
        const mocha = R.mocha;
        expect(R.mocha).to.be(mocha);
    });

    it("A required non-core module must be in cache", () => {
        expect(require.cache).to.have.key(require.resolve("mocha"))
    });

    it("Deleting from me-not deletes the module from cache", () => {
        delete R.mocha;
        expect(require.cache).to.not.have.key(require.resolve("mocha"))
    });
});
