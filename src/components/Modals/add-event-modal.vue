<template>
    <div>
        <form action="" method="">
            <h3 class="heading-primary">Add a Schedule</h3>
            <input type="text" placeholder="Enter Title" class="modal-textInput" v-model="form.title" required/>
            <div class="modal-dateInput">
                <input type="date" class="modal-dateInput__start" :min="minDateStart" v-model="form.start" @change="updateEndDateMin" required>
                <transition name="fade">
                    <input type="date" class="modal-dateInput__start" :min="minDateEnd" v-if="!sameDay" v-model="form.end" required>
                </transition>
            </div>
            <label class="container">Same Day
                <input type="checkbox" v-model="sameDay">
                <span class="checkmark"></span>
            </label>
            <div class="modal-btn__cont">
                <div class="modal-btn__one" @click="$emit('closeModal')">Cancel</div>
                <button class="modal-btn__two" @click.prevent="submit">Add Schedule</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    components: { 
    },
    data: () => ({
        sameDay: false,
        form: {
            start: "",
            end: "",
            title: ""
        },
        minDateStart: "",
        minDateEnd: ""
    }),

    created() {
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
            this.minDateEnd = this.form.start
        },
        submit() {
            if(this.sameDay) {
                this.form.end = this.form.start
            }
            if(this.form.title == "" || this.form.start == "" || this.form.end == ""){
                return
            }
            
            
            this.$emit('addEvent', this.form)
        }
    }
}
</script>