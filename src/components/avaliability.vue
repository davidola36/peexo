<template>
    <div class="cont">
        <h3 class="heading-primary">Availability</h3>
        <div class="panel">
        <div >
            <div @click="setView('calender')" class="panel-view">
            <img src="/img/calendar.svg" alt="calender" class="panel__icon">
            <div class="panel__link">Calender</div>
            </div>
            <div @click="setView('list')" class="panel-view">
            <img src="/img/list.svg" alt="calender" class="panel__icon">
            <div class="panel__link">List view </div>
            </div>
        </div>
        <div class="panel__input-cont">
            <input type="input" placeholder="Search" class="panel__input" />
            <button class="panel__button" @click="$emit('openModal', {type:'addSchedule'})">
            + ADD SCHEDULE
            </button>
        </div>
        </div>
    
        <transition name="fade" mode="out-in">
            <CalenderList v-if="view == 'list'"  v-bind="{events}" v-on:setAvailability="setAvailability" v-on:openModal="(data)=>{$emit('openModal', data)}"/>
            <Calender v-if="view == 'calender'"  v-bind="{events}" v-on:setAvailability="setAvailability"/>
        </transition>
    </div>
</template>

<script>
import Calender from './calender';
import CalenderList from './calender-list'
export default {
    props: ['events'],
    components: {
        Calender,
        CalenderList
    },
    data: () => ({
        view: 'calender',
    }),
    methods: {
        setView(data) {
            this.view = data;
        },
        setAvailability(data) {
            this.$emit("setAvailabilityView", data);
        }
    }
}
</script>