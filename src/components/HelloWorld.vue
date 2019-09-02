<template>
  <div class="page">
    <Sidenav />
    <main class="main">
      <Usernav />
      <section class="main-content">
        <div class="cont">
          <h3 class="heading-primary">Availability</h3>
          <div class="panel">
            <div>
              <img src="/img/calendar.svg" alt="calender" class="panel__icon">
              <div class="panel__link">Calender</div>
              <img src="/img/list.svg" alt="calender" class="panel__icon">
              <div class="panel__link">List view </div>
            </div>
            <div class="panel__input-cont">
              <input type="input" placeholder="Search" class="panel__input" />
              <button class="panel__button">
                + ADD SCHEDULE
              </button>
            </div>
          </div>

          <div class="date-panel">
            <img src="/img/left-arrow.svg" alt="left arrow" class="date-panel__icon">
            <img src="/img/right-arrow.svg" alt="right arrow" class="date-panel__icon">
            <h3 class="date-panel__month">September 2019</h3>
            <div class="date-panel__day">Today</div>
          </div>

          <div class="calender">
            <div class="calender__item calender__item-date">sun</div>
            <div class="calender__item calender__item-date">mon</div>
            <div class="calender__item calender__item-date">tue</div>
            <div class="calender__item calender__item-date">wed</div>
            <div class="calender__item calender__item-date">thu</div>
            <div class="calender__item calender__item-date">fri</div>
            <div class="calender__item calender__item-date">sat</div>
            <div class="calender__item calender__item-1">1</div>
            <div class="calender__item calender__item-occupied">2
              <div class="calender-content">
                Mrs. Steven daughter’s wedding photography
              </div>
            </div>
            <div class="calender__item calender__item-3">3</div>
            <div class="calender__item calender__item-4">4</div>
            <div class="calender__item calender__item-5">5</div>
            <div class="calender__item calender__item-6">6</div>
            <div class="calender__item calender__item-7">7</div>
            <div class="calender__item calender__item-8">8</div>
            <div class="calender__item calender__item-9">9</div>
            <div class="calender__item calender__item-10">10</div>
            <div class="calender__item calender__item-occupied calender-span__3">
                <div class="calender-span__grid">
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                </div>
                <div class="calender-content">
                  Mrs. Peter daughter’s wedding photography
                </div>
            </div>
            <div class="calender__item calender__item-14">14</div>
            <div class="calender__item calender__item-15">15</div>
            <div class="calender__item calender__item-16">16</div>
            <div class="calender__item calender__item-17">17</div>
            <div class="calender__item calender__item-18">18</div>
            <div class="calender__item calender__item-19">19</div>
            <div class="calender__item calender__item-20">20</div>
            <div class="calender__item calender__item-21">21</div>
            <div class="calender__item calender__item-22">22</div>
            <div class="calender__item calender__item-23">23</div>
            <div class="calender__item calender__item-24">24</div>
            <div class="calender__item calender__item-25">25</div>
            <div class="calender__item calender__item-26">26</div>
            <div class="calender__item calender__item-27">27</div>
            <div class="calender__item calender__item-28 calender__item-occupied">28
              <div class="calender-content">
               Mrs. Peter daughter’s wedding photography
              </div>
            </div>
            <div class="calender__item calender__item-29">29</div>
            <div class="calender__item calender__item-30">30</div>
            <div class="calender__item calender__item-31"></div>
            <div class="calender__item calender__item-32"></div>
            <div class="calender__item calender__item-33"></div>
            <div class="calender__item calender__item-34"></div>
            <div class="calender__item calender__item-35"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Sidenav from './side-nav';
import Usernav from './user-nav';

export default {
  name: 'HelloWorld',
  components: {
    Sidenav,
    Usernav
  },
  props: {
    
  }
}
</script>

