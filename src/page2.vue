<script setup>
import regisPage from './components/regis_page/regisPage.vue';
import Sec_form from './components/regis_page/Sec_form.vue';
</script>

<template>
    <!-- title -->
    <regisPage />

    <!-- form -->
    <KeepAlive>
        <Sec_form />
    </KeepAlive>
</template>

<script>
export default {}
</script>