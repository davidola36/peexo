<template>
  <div class="page">
    <Sidenav />
    <main class="main">
      <Usernav />
      <section class="main-content">
        <transition name="fade" mode="out-in">
          <Availability v-bind="{events}" 
            v-on:openModal="openModal"
            v-on:setAvailabilityView="setAvailabilityView"
            v-if="view == 'available'"/>
          <Event v-bind="{event}" v-on:openModal="openModal"  v-else v-on:setAvailabilityView="setAvailabilityView"/>
        </transition>
      </section>
    </main>
    <transition name="fade">
      <Modal 
        v-if="modal"
        v-bind="{type:modalType,event:modalData,successMessage:modalSucessMessage}"  
        v-on:closeModal="closeModal"
        v-on:addEvent="addEvent"
        v-on:deleteEvent="deleteEvent"
        v-on:updateEvent="updateEvent"
        />
    </transition>
  </div>
</template>

<script>
import Sidenav from './side-nav';
import Usernav from './user-nav';
import Modal from './Modals/modal';
import Availability from './avaliability';
import Event from './event'

export default {
  name: 'HelloWorld',
  components: {
    Sidenav,
    Usernav,
    Modal,
    Availability,
    Event
  },
  props: {
   
  },
  data: () => ({
    modal: false,
    modalType: '',
    modalSucessMessage: "",
    event: {},
    modalData: "",
    view: "available",
    events: [
      {
        name: 'Spending time on how we do not have enough time',
        details: 'Spending time on how we do not have enough time',
        start: '2019-01-07',
        end: '2019-01-07',
        color: '#4D4D4D',
        type: "Platform",
        id: 0
      }
      // {
      //   name: 'Vacation',
      //   details: 'Going to the beach!',
      //   start: '2018-12-29',
      //   end: '2019-01-01',
      //   color: '#FFB603',
      //   type: 'User',
      //   id: 0
      // },
    ]
  }),

  created() {
    let today = new Date()
    let UTCday = today.getUTCDay() + 1
    let day = UTCday < 10 ? '0' + UTCday : UTCday;
    let UTCmonth = today.getUTCMonth() + 1;
    let month = UTCmonth < 10 ? '0' + UTCmonth : UTCmonth;
    const date = today.getUTCFullYear() + '-' + month  + '-' + day
    this.events[0].start = date
    this.events[0].end = date 
  },
    
  methods: {
    openModal(data) {
      this.modal = true;
      this.modalType = data.type
      this.modalData = data.data
    }, 
    closeModal() {
      this.modal = false;
    },
    setAvailabilityView(data) {
      this.view = data.status;
      this.event = data.data;
    },
    addEvent(data){
      console.log(this.events.length)
      data = { 
        name: data.title,
        details: data.title,
        start: data.start,
        end: data.end,
        color: '#FFB603',
        type: 'User',
        id: this.events.length
      }
      this.events.push(data);
      this.modalType = "success"
      this.modalSucessMessage = "Schedule added sucessfully."
      console.log(this.events.length)
    },
    deleteEvent(data) {
      let index = this.events.findIndex((el)=>{return el.id == data.id})
      this.events.splice(index,1)
      this.modalType = "success"
      this.modalSucessMessage = "Schedule deleted sucessfully."
      this.view = "available"
    },
    updateEvent(data) {
      let index = this.events.findIndex((el)=>{return el.id == data.id});
      let events  = [...this.events]
      events[index].name = data.details;
      events[index].details = data.details;
      events[index].start = data.start;
      events[index].end = data.end;
      this.events = events;
      this.modalType = "success"
      this.modalSucessMessage = "Schedule updated sucessfully."

    }
  }
}
</script>

