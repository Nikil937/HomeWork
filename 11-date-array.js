const data = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filteringData(arr) {
  return arr
    .filter(el => {
      let parts;

      if (el.includes('-')) {
        parts = el.split('-');
      } else if (el.includes('/')) {
        parts = el.split('/');
      } else {
        return false;
      }

      if (parts.length !== 3) return false;

      const day = Number(parts[0]);
      const month = Number(parts[1]);
      const year = Number(parts[2]);

      if (
        Number.isNaN(day) ||
        Number.isNaN(month) ||
        Number.isNaN(year)
      ) {
        return false;
      }

      return day >= 1 && day <= 31 && month >= 1 && month <= 12;
    })
    .map(el => {
      if (el.includes('/')) {
        const [day, month, year] = el.split('/');
        return `${month}-${day}-${year}`;
      }
      return el;
    });
}

console.log(filteringData(data));