// Conver API date to VNese date

export const converDate = (data) => {
  const date = new Date(data);
  return date.toLocaleDateString();
};

const days = [
  'Thứ Bảy',
  'Chủ Nhật',
  'Thứ Hai',
  'Thứ Ba',
  'Thứ Tư',
  'Thứ Năm',
  'Thứ Sáu',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDay = (date) => days[date.getDay()];
export const getMonth = (date) => months[date.getMonth()];

//

export const randomDuration = () =>
  Math.trunc(Math.random() * (200 - 120) + 120);
//
export const randomNumber = () => Math.trunc(Math.random() * (8 - 5) + 5);
