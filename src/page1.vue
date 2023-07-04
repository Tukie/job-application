<script setup>
import Slide from './components/home_page/Slide.vue';
import news from './components/home_page/news.vue';
import headTItle from './components/home_page/headTItle.vue'
import sec_progress from './components/home_page/sec_progress.vue'
</script>

<template>
    <!-- Article -->
    <Slide />
    <headTItle />
    <div class="mx-5">
        <news news_date="2022 - 07 - 03" isnew="yes" news_title="ประกาศรายชื่อผู้สมัคร" />
        <news news_date="2022 - 07 - 03" isnew="no" news_title="แก้ไขข้อมูลเพิ่มเติม" />
        <news news_date="2022 - 07 - 03" isnew="yes" news_title="Lorem" />
    </div>
    <sec_progress />
</template>

<style scoped></style>

<script>
export default {}
</script>