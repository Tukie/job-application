<script setup>
function check_form() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
}
</script>

<template>
    <div class="my-4 ">
        <!-- form -->
        <form @submit.prevent="check_form()" class="row m-auto g-3 needs-validation w-75" novalidate>
            <div class="col-12">
                <!-- <label for="Card_id" class="form-label">รหัสบัตรประจำตัวประชาชน</label> -->
                <div class="position-relative">
                    <input type="text" class="form-control shadow rounded-5" placeholder="รหัสบัตรประจำตัวประชาชน"
                        id="Card_id" value="" required oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        minlength="13" maxlength="13">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary icon icon-tabler icon-tabler-search" width="30"
                        height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                </div>
                <div class="valid-feedback">
                </div>
            </div>
            <div class="col-12">
                <!-- <label for="DateOfBirth" class="form-label">วันเดือนปีเกิด</label> -->
                <div class="position-relative">
                    <input type="text" class="form-control shadow rounded-5" placeholder="พ.ศ. เกิด" id="DateOfBirth"
                        value="" required oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="4"
                        minlength="4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary icon icon-tabler icon-tabler-calendar" width="30"
                        height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                    </svg>
                </div>
                <div class="valid-feedback">
                </div>
            </div>

            <div class="col-12 text-center mt-4">
                <button class="btn btn-primary btn-lg rounded-5 bg-m1 px-5 fw-bold" type="submit">ค้นหา</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
input {
    height: 60px;
    text-indent: 60px;
}

svg {
    position: absolute;
    transform: translate(30px, -45px);
}
</style>
