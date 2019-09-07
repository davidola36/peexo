<template>
    <div>
        <p class="delete-modal__text">
            You are about to free up {{event.start}}, booked for {{event.details}}.
        </p>
        <div class="modal-btn__cont">
            <button class="modal-btn__one" @click="$emit('closeModal')">Cancel</button>
            <button class="modal-btn__two" @click="$emit('deleteEvent', event)">Delete Schedule</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["event"],
    mounted() {
        console.log(this.event)
    }
}
</script>