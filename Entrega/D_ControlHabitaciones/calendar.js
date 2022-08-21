//Esto esta incompleto aun lo estamos trabajando

class Calendar {
  constructor(id) {
    this.elCalendar = document.getElementById(id);
    this.showTemplate();
  }

  showTemplate() {
    this.elCalendar.innerHTML = this.getTemplate();
  }

  getTemplate() {
    let template = `
            <div class="calendar__header">
                <button type="button" class="control contol--prev">&lt;</button>
                <span class="month-name">Agosto 2022</span>
                <button type="button" class="control contol--next">&gt;</button>
            </div>
            <div class="calendar_body">
                <div class="grid">
                    <div class="grid__header">
                        <span class="grid__cell grid__cell--gh">Lun</span>
                        <span class="grid__cell grid__cell--gh">Mar</span>
                        <span class="grid__cell grid__cell--gh">Mie</span>
                        <span class="grid__cell grid__cell--gh">Jue</span>
                        <span class="grid__cell grid__cell--gh">Vie</span>
                        <span class="grid__cell grid__cell--gh">Sab</span>
                        <span class="grid__cell grid__cell--gh">Dom</span>
                    </div>
                    <div class="grid__body">
                        <span class="grid__cell grid__cell--gd grid__cell--selected">1</span>
                        <span class="grid__cell grid__cell--gd">2</span>
                        <span class="grid__cell grid__cell--gd">3</span>
                        <span class="grid__cell grid__cell--gd">4</span>
                        <span class="grid__cell grid__cell--gd">5</span>
                        <span class="grid__cell grid__cell--gd">6</span>
                        <span class="grid__cell grid__cell--gd">7</span>
                        <span class="grid__cell grid__cell--gd">8</span>
                        <span class="grid__cell grid__cell--gd">9</span>
                        <span class="grid__cell grid__cell--gd">10</span>
                        <span class="grid__cell grid__cell--gd">11</span>
                        <span class="grid__cell grid__cell--gd">12</span>
                        <span class="grid__cell grid__cell--gd">13</span>
                        <span class="grid__cell grid__cell--gd">14</span>
                        <span class="grid__cell grid__cell--gd">15</span>
                        <span class="grid__cell grid__cell--gd">16</span>
                        <span class="grid__cell grid__cell--gd">17</span>
                        <span class="grid__cell grid__cell--gd">18</span>
                        <span class="grid__cell grid__cell--gd">19</span>
                        <span class="grid__cell grid__cell--gd">20</span>
                        <span class="grid__cell grid__cell--gd">21</span>
                        <span class="grid__cell grid__cell--gd">22</span>
                        <span class="grid__cell grid__cell--gd">23</span>
                        <span class="grid__cell grid__cell--gd">24</span>
                        <span class="grid__cell grid__cell--gd">25</span>
                        <span class="grid__cell grid__cell--gd">26</span>
                        <span class="grid__cell grid__cell--gd">27</span>
                        <span class="grid__cell grid__cell--gd">28</span>
                        <span class="grid__cell grid__cell--gd">29</span>
                        <span class="grid__cell grid__cell--gd">30</span>
                        <span class="grid__cell grid__cell--gd">31</span>
                        <span class="grid__cell grid__cell--gd">32</span>
                        <span class="grid__cell grid__cell--gd">33</span>
                        <span class="grid__cell grid__cell--gd grid__cell--disabled">34</span>
                        <span class="grid__cell grid__cell--gd grid__cell--disabled">35</span>
                    </div>
                </div>
            </div>
        `;
    return template;
  }

  generateDates(monthToShow = moment()) {
    if (moment.isMoment(monthToShow)) {
      {
        return null;
      }
      let dateStart = moment(monthToShow).startOf("month");
      let dateEnd = moment(monthToShow).endOf("month");
      let cells = [];
      //encontrar primera fecha
      while (dateStart.day() !== 1) {
        dateStart.subtract(1, "days");
      }
      //Encontrar la ultima fecha que se mostrara en el calendario
      while (dateEnd.day() !== 0) {
        dateEnd.add(1, "days");
      }

      do {
        cells.push({
          date: moment(dateStart),
          isInCurrentMonth: dateStart.month() === monthToShow.mont(),
        });
        dateStart.add(1, "days");
      } while (dayStart.isSameOrBefore(dataEnd));

      console.log(cells);
    }
  }
}

window.onload = function () {
  const calendar = new Calendar("calendar");
  const Template = calendar.getTemplate();
  window.getElementById("calendar").innerHTML = Template;
};

// https://www.youtube.com/watch?v=tp9UAZrqb9s&t=157 min 26:30
