// Returns true if string contains ONLY valid
// Telephone characters ("0-9", "-", "(", ")", " ")
function validCharacters(str) {
  var regex = /^[0-9-()" "]*$/;
  return regex.test(str);
}

// Returns country code else undefined
function getCountryCode(str) {
  // 1 555 555 5555 format ?
  console.log(str);
  if(!isNaN(str.charAt(0)) && (str.charAt(1) === " " || str.charAt(1) === "(")) {
    return str.charAt(0);
  } else if (str.charAt(0) === "-") {
    return false;
  }
  return undefined;
}

// Returns true if the parenthesis of a number
// are valid. Ex: 1 (555 555) 5555 is invalid.
function validParenthesis(str) {
  var hasParenthesis = /[()]/;
  var validParenthesis = /\([0-9]{3}\)/;
  if (hasParenthesis.test(str)) {
    if (validParenthesis.test(str)) {
      return true;
    }
    return false;
  }
  return true;
}

// Returns true if the string is a valid US phone number
function telephoneCheck(str) {
  var regex = /[0-9]*/g;
  // Contains ONLY "0-9", "-", "(", ")"
  if (validCharacters(str)) {
    // US Country Code ?
    if (getCountryCode(str) === "1" || getCountryCode(str) === undefined) {
      var nums = str.match(regex).join("");
      // Number has 10 OR 11 digits && country code ?
      if (nums.length === 10 || (getCountryCode(str) === "1" && nums.length === 11)) {
        // Valid Parenthesis ?
        if (validParenthesis(str)) {
          return true;
        }
      }
    }
  }
  return false;
}

telephoneCheck("1 555-555-5555");