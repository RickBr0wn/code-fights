/**
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
Given a string, find out if it satisfies the IPv4 address naming rules.

Example:
For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;
For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.
316 is not in range [0, 255].
For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.
There is no first number.

Input/Output:
[execution time limit] 4 seconds (js)
[input] string inputString
A string consisting of digits, full stops and lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 30.
[output] boolean

true if inputString satisfies the IPv4 address naming rules, false otherwise.
 */
module.exports = function isIPv4Address(inputString) {
  const bitsArray = inputString.split(".")
  const reduced = bitsArray.filter(
    // TODO: improve to regex to include what the parseInt() is doing here.
    str => parseInt(str, 10) < 256 && !/[A-Za-z]/g.test(str)
  )

  if (bitsArray.length !== 4 || reduced.length !== 4) {
    return false
  }
  return true
}
