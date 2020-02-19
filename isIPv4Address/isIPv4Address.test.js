const isIPv4Address = require("./isIPv4Address")

describe("isIPv4Address()", () => {
  it("should return true if inputString satisfies the IPv4 address naming rules, false otherwise", () => {
    expect(isIPv4Address("172.16.254.1")).toBe(true)
    expect(isIPv4Address("172.316.254.1")).toBe(false)
    expect(isIPv4Address(".254.255.0")).toBe(false)
    expect(isIPv4Address("1.1.1.1a")).toBe(false)
    expect(isIPv4Address("1")).toBe(false)
    expect(isIPv4Address("0.254.255.0")).toBe(true)
    expect(isIPv4Address("1.23.256.255.")).toBe(false)
    expect(isIPv4Address("1.23.256..")).toBe(false)
    expect(isIPv4Address("0..1.0")).toBe(false)
    expect(isIPv4Address("35..36.9.9.0")).toBe(false)
    expect(isIPv4Address("1.1.1.1.1")).toBe(false)
    expect(isIPv4Address("1.256.1.1")).toBe(false)
    expect(isIPv4Address("a0.1.1.1")).toBe(false)
    expect(isIPv4Address("0.1.1.256")).toBe(false)
    expect(isIPv4Address("129380129831213981.255.255.255")).toBe(false)
    expect(isIPv4Address("255.255.255.255abcdekjhf")).toBe(false)
    expect(isIPv4Address("7283728")).toBe(false)
    expect(isIPv4Address("0..1.0.0")).toBe(false)
  })
})
