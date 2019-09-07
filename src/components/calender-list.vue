<template>
    <div class="calender-list"> 
        <div class="calender-list__item" 
            v-for="(item, index) in events" 
            :key="index" 
            >
            <span class="calender-list__date">{{item.start}}</span>
            <span class="calender-list__text" @click="$emit('setAvailability', {status:'event',data:item})">{{ item.details }}</span>
            <span class="calender-list__type">{{item.type}}</span>
            <img src="/img/delete.svg" alt="delete" class="calender-list__delete" @click="$emit('openModal', {type:'delete',data:item})" v-if="item.type == 'User'"/>
            <div class="calender-list__delete" v-else></div>
        </div>
    </div>
</template>

<script>
import Calender from './calender';
import CalenderList from './calender-list'
export default {
    props: ['events']
}
</script>