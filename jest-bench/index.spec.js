const {sampleFn} = require("./index")

describe('test', () => {
  it('say Hello', () => {
    expect(sampleFn("tyankatsu")).toBe("Hello tyankatsu");
  });
});