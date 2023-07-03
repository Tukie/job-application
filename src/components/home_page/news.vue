<template>
    <div class="mb-3">
        <a class="btn text-m1 rounded-5 fw-bold" style="background-color: #ECECEC;">{{ news_date }} <span
                v-if="isnew == 'yes'" class="text-danger">New!</span></a>
        <span class="ms-2">{{ news_title }}</span>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
defineProps({
    news_date: String,
    isnew: String,
    news_title: String
})


</script>

<style scoped></style>