/**
 * This function formats a salary range.
 * It tries to parse the salary as JSON and if successful, it formats the salary range as a string.
 * If the parsing fails, it returns the salary as a string.
 * @param {string} salary - A string representing a salary range in JSON format.
 * @returns {string} The formatted salary range.
 */

const formatSalary = (salary) => {
  try {
    const parsedSalary = JSON.parse(salary);
    const { min, max, type } = parsedSalary;

    if (min === max) {
      return `${abbreviateNumber(min)} (${type})`;
    } else {
      return `${abbreviateNumber(min)} - ${abbreviateNumber(max)} (${type})`;
    }
  } catch (e) {
    return salary.toString();
  }
};

const abbreviateNumber = (num) => {
  if (num >= 1000) {
    const abbreviated = (num / 1000).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: Number.isInteger(num / 1000) ? 0 : 1,
    });
    return abbreviated + "k";
  } else {
    return num.toString();
  }
};

export { formatSalary };
