<template>
    <div class="modal">
        <div class="modal-backdrop" @click="$emit('closeModal')"></div>
        <div class="modal-content">
            <transition name="fade" mode="out-in">
                <AddEventModal 
                    v-on:addEvent="(data)=>{$emit('addEvent', data)}"
                    v-on:closeModal="$emit('closeModal')"
                    v-if="type == 'addSchedule'"
                 />
                <DoneModal v-if="type == 'success'" v-on:closeModal="$emit('closeModal')" v-bind="{successMessage}"/>
                <UpdateEventModal 
                    v-if="type =='update'" v-bind="{event}" 
                    v-on:closeModal="$emit('closeModal')" 
                    v-on:updateEvent="(data)=>{$emit('updateEvent', data)}"/>
                <DeleteEventModal 
                    v-if="type =='delete'" 
                    v-bind="{event}" 
                    v-on:closeModal="$emit('closeModal')"
                    v-on:deleteEvent="(data)=>{$emit('deleteEvent', data)}" 
                     />

            </transition>
            
            
        </div>
    </div>
</template>


<script>
import AddEventModal from './add-event-modal';
import DoneModal from "./done-modal";
import UpdateEventModal from "./update-event-modal";
import DeleteEventModal from "./delete-event-modal";

export default {
    props: ['type','event','successMessage'],
    components: { 
        AddEventModal,
        DoneModal,
        UpdateEventModal,
        DeleteEventModal
    },
    data: () => ({
        
    }),
    methods: {
    }
        
}
</script>