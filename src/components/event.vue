<template>
    <div class="cont">
        <div class="event-back" @click="$emit('setAvailabilityView', {status:'available'})"><img src="/img/back.svg" class="event-back__img" />  go back</div>
        <h3 class="heading-primary">Availability</h3>
        <div class="event-card">
            <div class="event-date">
                {{event.start}}
                <span v-if="event.type == 'User'" >
                    <div class="event-edit" @click="$emit('openModal', {type: 'update', data: event})">
                        <img src="/img/edit.svg" alt="edit" class="event-edit__icon">
                        <span class="event-edit__text">Edit</span>
                    </div>

                    <div class="event-edit" @click="$emit('openModal', {type: 'delete', data: event})">
                        <img src="/img/delete.svg" alt="delete" class="event-edit__icon">
                        <span class="event-edit__text">Delete</span>
                    </div>
                    
                </span>
            </div>
            <div class="event-text">{{event.details}}</div>
            <div class="event-type">{{event.type}}</div>
        </div>
          
    </div>
</template>

<script>
export default {
    props: ['event']
}
</script>