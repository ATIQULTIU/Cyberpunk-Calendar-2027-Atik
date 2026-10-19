(() => {
  'use strict';
  const YEAR = 2027;
  const MONTHS = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  const WEEKDAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const grid = document.getElementById('calendarGrid');

  // UTC arithmetic avoids timezone/DST shifts. Convert JS Sunday-first to Monday-first.
  function mondayFirstOffset(year, month) {
    return (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7;
  }
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  function renderCalendar() {
    const fragment = document.createDocumentFragment();
    for (let month = 0; month < 12; month += 1) {
      const card = document.createElement('article');
      card.className = 'month-card';
      const heading = document.createElement('h3');
      heading.textContent = MONTHS[month];
      card.appendChild(heading);
      const days = document.createElement('div');
      days.className = 'days-grid';
      days.setAttribute('role', 'grid');
      days.setAttribute('aria-label', `${MONTHS[month]} ${YEAR}`);
      WEEKDAYS.forEach((weekday, index) => {
        const label = document.createElement('div');
        label.className = `day-name${index === 6 ? ' sun' : ''}`;
        label.textContent = weekday;
        label.setAttribute('role', 'columnheader');
        days.appendChild(label);
      });
      const offset = mondayFirstOffset(YEAR, month);
      const count = daysInMonth(YEAR, month);
      for (let blank = 0; blank < offset; blank += 1) {
        const empty = document.createElement('span');
        empty.className = 'day empty';
        empty.setAttribute('aria-hidden', 'true');
        days.appendChild(empty);
      }
      for (let date = 1; date <= count; date += 1) {
        const cell = document.createElement('span');
        const weekdayIndex = (offset + date - 1) % 7;
        cell.className = `day${weekdayIndex === 6 ? ' sunday' : ''}`;
        cell.textContent = String(date);
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-label', `${MONTHS[month][0]}${MONTHS[month].slice(1).toLowerCase()} ${date}, ${YEAR}`);
        days.appendChild(cell);
      }
      card.appendChild(days);
      fragment.appendChild(card);
    }
    grid.appendChild(fragment);
  }

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
  }

  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('photoUpload').addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      window.alert('Please select an image file.');
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      document.getElementById('profilePhoto').src = String(reader.result);
      document.getElementById('profilePhoto').alt = 'Selected developer portrait preview';
    });
    reader.readAsDataURL(file);
  });

  renderCalendar();
  updateClock();
  window.setInterval(updateClock, 1000);
})();
