import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 1 - firstDayOfTheMonth;

  const daysMatrix = [[], [], [], [], []].map(() => {
    //5 rows for every column
    return [[null], [null], [null], [null], [null], [null], [null]].map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
