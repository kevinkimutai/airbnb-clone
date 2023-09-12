export function getNumberOfDays(startDate: string, endDate: string): number {
  // Convert the date strings to Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Calculate the time difference in milliseconds
  const timeDifference = endDateObj.getTime() - startDateObj.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}
