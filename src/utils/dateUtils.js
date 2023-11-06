/**
 * This function calculates the age based on a given date.
 * It uses the JavaScript Date object to get the current date and the birth date.
 * It then calculates the age by subtracting the birth year from the current year.
 * If the current month is less than the birth month, or if the current month is the same as the birth month but the current day is less than the birth day, it subtracts one from the age.
 * @param {string} date - A string representing the date of birth in a format recognized by the Date.parse() method (usually "mm/dd/yyyy").
 * @return {number} The calculated age. If no date is provided, it returns null.
 */

export const calculateAge = (date) => {
  // If no date is provided, return null
  if (!date) return null;

  // Get the current date
  const today = new Date();

  // Create a new Date object from the provided date
  const birthDate = new Date(date);

  // Calculate the age by subtracting the birth year from the current year
  let age = today.getFullYear() - birthDate.getFullYear();

  // Calculate the difference in months between the current month and the birth month
  const month = today.getMonth() - birthDate.getMonth();

  // If the current month is less than the birth month, or if the current month is the same as the birth month but the current day is less than the birth day, subtract one from the age
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    age--;

  // Return the calculated age
  return age;
};
