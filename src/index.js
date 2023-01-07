module.exports = function toReadable (number) {
  let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let hundreds = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let division = Math.floor(number / 100);
  let remainder = number % 100;

  if (number === 0) {
    return "zero";
  }

  let hundredsFn = (number) => {

    if (division === 0) {
        return "";
    } else {
        return `${units[division - 1]} hundred`;
    }
  };

  let tensFn = (number) => {

    if (Math.floor((remainder) / 10) === 0) {
        return "";
    } else if (
        Math.floor(remainder) > 10 && Math.floor(remainder) < 20
    ) {
        return `${" " + tens[((remainder) % 10) - 1]}`;
    } else {
        return `${" " + hundreds[Math.floor((remainder) / 10) - 1]}`;
    }
  };

  let unitsFn = (number) => {

    if ((remainder) % 10 === 0) {
        return "";
    } else if (
        (remainder) % 10 > 0 && Math.floor((remainder) / 10) === 1
    ) {
        return "";
    } else {
        return `${" " + units[((remainder) % 10) - 1]}`;
    }
  };

  return `${hundredsFn(number)}${tensFn(number)}${unitsFn(number)}`.trim();
}
