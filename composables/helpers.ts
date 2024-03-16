import type { Fruit, Gender } from '~~/types';

export const calculateAgeInYears = (birthdate: Date): number => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();
  const result = Math.round(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );
  if (result < 0)
    // Throw an error in case the birthdate is in the future.
    throw new Error('The birthdate provided can not be in the future.');

  if (result === 0)
    // handle an edge case where the difference may be 0
    return 1;

  return result;
};

export const calculateFoodPerDay = (
  weight: number,
  height: number,
  fruit: Fruit,
  gender: Gender,
  birthdate: Date,
  species: string
): number => {
  let foodPerDay = (weight + height) / 250;
  const age = calculateAgeInYears(birthdate);
  if (species === 'fish') return 0;
  if (age > 20) foodPerDay = foodPerDay / 2;
  else if (age < 2) foodPerDay = foodPerDay * 2;
  if (fruit === 'cherry') foodPerDay = foodPerDay + 28;
  if (gender === 'male') foodPerDay = foodPerDay + foodPerDay * 0.2;

  return Math.fround(foodPerDay);
};

export const calculateFoodForNextMonth = (
  weight: number,
  height: number,
  fruit: Fruit,
  gender: Gender,
  birthdate: Date,
  species: string,
  currentDate: Date
): number => {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  return Math.round(
    calculateFoodPerDay(weight, height, fruit, gender, birthdate, species) *
      daysInMonth
  );
};
