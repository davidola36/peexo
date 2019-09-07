<template>
    <div class="update-modal">
        <h3 class="heading-primary">Update Schedule</h3>
        <input type="text" placeholder="Enter Title" class="modal-textInput" v-model="form.details" />
        <input type="date" placeholder="Enter Title" class="modal-textInput" :min="minDateStart" @change="updateEndDateMin" v-model="form.start"/>
        <transition name="fade">
            <input type="date" class="modal-textInput" v-if="!sameDay" v-model="form.end" :min="minDateEnd">
        </transition>
        <label class="container">Same Day
            <input type="checkbox" v-model="sameDay">
            <span class="checkmark"></span>
        </label>
        <div class="modal-btn__cont">
            <button class="modal-btn__one" @click="$emit('closeModal')">Cancel</button>
            <button class="modal-btn__two" @click="submit">Update Schedule</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["event"],
    data: () => ({
        sameDay: false,
        form: {
            details: "",
            start: "",
            end: "",
            id: null
        },
        minDateStart: "",
        minDateEnd: ""
    }),
    created() {
        this.form.details = this.event.details;
        this.form.start = this.event.start;
        this.form.end = this.event.end;
        this.form.id = this.event.id;
        if(this.form.start == this.form.end) {
            this.sameDay = true;
        }
        let today = new Date()
        let UTCday = today.getUTCDay() + 1
        let day = UTCday < 10 ? '0' + UTCday : UTCday;
        let UTCmonth = today.getUTCMonth() + 1;
        let month = UTCmonth < 10 ? '0' + UTCmonth : UTCmonth;
        const date = today.getUTCFullYear() + '-' + month  + '-' + day
        this.minDateStart = date;
        this.minDateEnd = date;
     
    },
    
    methods: {
        updateEndDateMin() {
            console.log("update end")
            this.minDateEnd = this.form.start
        },
        submit() {
            if(this.sameDay){
                this.form.end = this.form.start
            }

            if( this.form.details == "" || this.form.details == this.event.details && this.form.start == this.event.start && this.form.end == this.event.end){
                return
            }
            console.log("here")
            
            this.$emit("updateEvent", this.form)
        }
    }
}
</script>