//transform date string to DD-SweMonthName
const transformeDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  let month;

  switch (date.getMonth()) {
    case 0:
      month = " Jan";
      break;
    case 1:
      month = " Feb";
      break;
    case 2:
      month = " Mar";
      break;
    case 3:
      month = " Apr";
      break;
    case 4:
      month = " Maj";
      break;
    case 5:
      month = " Jun";
      break;
    case 6:
      month = " Jul";
      break;
    case 7:
      month = " Aug";
      break;
    case 8:
      month = " Sep";
      break;
    case 9:
      month = " Okt";
      break;
    case 10:
      month = " Nov";
      break;
    case 11:
      month = " Dec";
      break;
    default:
      month = " XX";
  }
  let result = {
    day: day,
    month: month,
  };
  return result;
};

export default transformeDate;
