<template>
    <div class="done-modal">
        <img src="/img/done.svg" class="done-modal__icon" />
        <p class="done-modal__text">{{successMessage}}</p>
        <button class="done-modal__button" @click="$emit('closeModal')">Done</button>
    </div>
</template>

<script>
export default {
    props: ["successMessage"]
}
</script>