// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

/**
 * @param {string} address
 * @return {string}
 */

//P - a string containing an IP Address
//R - the string with all instances of . replaced with [.]
//E - Input: address = "1.1.1.1"
//    Output: "1[.]1[.]1[.]1"
//P - There is a javascript method that allows us to do this with replaceAll and we just return it
var defangIPaddr = function (address) {
    return address.replaceAll('.', '[.]')
};