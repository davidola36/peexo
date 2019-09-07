<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64" style="background-color:transparent !important">
        <v-toolbar flat color="white" style="background-color:transparent !important"> 
          <img src="/img/left-arrow.svg"  @click="prev" alt="left arrow" class="date-panel__icon">
          <img src="/img/right-arrow.svg"  @click="next" alt="right arrow" class="date-panel__icon">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-btn outlined class="mr-4" @click="setToday" style="margin-left:1rem;">
            Today
          </v-btn>
          <div class="flex-grow-1"></div>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600" style="border-left: 1px solid #e0e0e0;border-top: 1px solid #e0e0e0;">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          type="month"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>

      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: ['events'],
    data: () => ({
      today: '',
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    created() {
      var today = new Date()
      let UTCday = today.getUTCDay() + 1
      let day = UTCday < 10 ? '0' + UTCday : UTCday;
      let UTCmonth = today.getUTCMonth() + 1;
      let month = UTCmonth < 10 ? '0' + UTCmonth : UTCmonth;
      var date = today.getUTCFullYear() + '-' + month  + '-' + day
      this.today = date;
      this.focus = date;
    },
    methods: {
      viewDay ({ date }) {
        console.log("add an entry")
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        console.log("cliked show event")
        this.$emit("setAvailability", {status: 'event', data: event})
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>

  