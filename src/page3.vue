<script setup>
import Title_check from './components/check_page/Title_check.vue'
import step1 from './components/check_page/step1.vue';
import step2 from './components/check_page/step2.vue';
import step3 from './components/check_page/step3.vue';
import step4 from './components/check_page/step4.vue';
import Detail from './components/check_page/Detail.vue';
import alert_checl from './components/check_page/alert_checl.vue';
import personal from './components/check_page/personal.vue';
</script>

<template>
    <Title_check />

    <!-- progress -->
    <div class="row">
        <div class="col-md-3 mb-2">
            <!-- setep1 -->
            <step1 success='yes' />
        </div>
        <div class="col-md-3 mb-2">
            <!-- step2 -->
            <step2 success='yes' />
        </div>
        <div class="col-md-3 mb-2">
            <!-- step3 -->
            <step3 success='error' />
        </div>
        <div class="col-md-3 mb-2">
            <!-- step4 -->
            <step4 />
        </div>
    </div>

    <!-- detail -->
    <Detail />

    <!-- alert -->
    <div class="bg-m2 rounded-3 d-flex justify-content-center align-items-center w-100 py-4">
        <alert_checl Status="warning" Message_detail="โปรดตรวจสอบข้อมูลอีกครั้ง" />
    </div>

    <!-- personal detail -->
    <personal status="error" />
</template>

<script>
export default {}
</script>