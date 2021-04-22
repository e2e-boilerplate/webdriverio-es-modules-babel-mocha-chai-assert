import { assert } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    assert.strictEqual(title, "Sandbox");

    const header = browser.$("h1").getText();
    assert.strictEqual(header, "Sandbox");
  });
});
