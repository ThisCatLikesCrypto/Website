let currentWeek = 1;
let timetableData = {
  week1: [],
  week2: []
};

function toggleWeek() {
  currentWeek = currentWeek === 1 ? 2 : 1;
  document.getElementById('weekHeader').innerText = currentWeek === 1 ? 'Week 1' : 'Week 2';
  clearTimetable();
  loadTimetable();
}

function saveTimetable() {
  const rows = document.querySelectorAll('.timetable tbody tr');
  const weekData = currentWeek === 1 ? 'week1' : 'week2';
  timetableData[weekData] = [];

  rows.forEach(row => {
    const period = row.cells[0].innerText;
    const days = Array.from(row.cells).slice(1).map(cell => cell.innerText);
    timetableData[weekData].push({ period, days });
  });

  localStorage.setItem('timetable', JSON.stringify(timetableData));
  alert('Timetable saved successfully!');
}

function exportJSON() {
  const jsonString = JSON.stringify(timetableData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `timetable.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadTimetable() {
  const storedTimetable = localStorage.getItem('timetable');
  if (storedTimetable) {
    timetableData = JSON.parse(storedTimetable);
    const weekData = currentWeek === 1 ? timetableData.week1 : timetableData.week2;
    document.getElementById('weekHeader').innerText = `Week ${currentWeek}`;

    weekData.forEach((period, index) => {
      const row = document.querySelectorAll('.timetable tbody tr')[index];
      row.cells[0].innerText = period.period;
      period.days.forEach((subject, i) => {
        row.cells[i+1].innerText = subject;
      });
    });
  }
}

function clearTimetable() {
  const cells = document.querySelectorAll('.editable');
  cells.forEach(cell => {
    cell.innerText = '';
  });
}

window.onload = loadTimetable;