<script setup>
defineProps({
    prefix: {
        type: String,
        default: 'นาย'
    },
    fname: {
        type: String,
        default: 'xxxxxx'
    },
    lname: {
        type: String,
        default: 'xxxxxx'
    },
    nation: {
        type: String,
        default: 'ไทย'
    },
    ethnicity: {
        type: String,
        default: 'ไทย'
    },

    // birth
    dateOfbirth: {
        type: Number,
        default: '05'
    },
    monthOfbirth: {
        type: String,
        default: 'ธันวาคม'
    },
    yearsOfbirth: {
        type: Number,
        default: '2000'
    },

    // age
    age: {
        type: Number,
        default: '23'
    },

    // card
    ID_card: {
        type: Number,
        default: '0-0000-00000-00-0'
    },

    card_start_date: {
        type: String,
        default: '05 มกราคม 2023'
    },

    card_end_date: {
        type: String,
        default: '05 มกราคม 2033'
    },

    // 

    disabled_type: {
        type: String,
        default: 'ไม่มี'
    },

    // edu
    educational: {
        type: String,
        default: 'ปริญญา...'
    },
    major: {
        type: String,
        default: 'วิทยาการจัดการ'
    },
    dregree: {
        type: String,
        default: '3.45'
    },
    university: {
        type: String,
        default: 'University Name'
    },
    university_province: {
        type: String,
        default: 'น่าน'
    },

    gradu_date: {
        type: String,
        default: '20 มีนาคม 2563'
    },

    // now job
    nowjob: {
        type: String,
        default: 'ว่างงาน'
    },
    job_place: {
        type: String,
        default: '52 หมู่ 7 บ.บ้าน ต.ตำบล อ.อำเภอ จ.จังหวัด โทร. 0610500000'
    },

    // contact
    contact_address: {
        type: String,
        default: '52 หมู่ 7 บ.บ้าน ต.ตำบล อ.อำเภอ จ.จังหวัด'
    },
    contact_passcode: {
        type: String,
        default: '42000'
    },
    contact_tel: {
        type: String,
        default: '0610500000'
    },
    contact_email: {
        type: String,
        default: 'email@email.com'
    },
    status: {
        type: String,
        default: ""
    }

})

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

function print_report() {
    window.print();
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary icon icon-tabler icon-tabler-search"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary icon icon-tabler icon-tabler-calendar"
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
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
    <!--  -->
    <div class="my-5 shadow p-3 rounded-3">
        <p class=" m-0">
            <b class="ms-1">ชื่อ - สกุล :</b> <span>{{ prefix + fname + " " + lname }} </span>
            <b class="ms-1">สัญชาติ : </b><span>{{ nation }} </span>
            <b class="ms-1">เชื้อชาติ : </b><span>{{ ethnicity }} </span>
            <b class="ms-1">เกิดวันที่ : </b><span>{{ dateOfbirth + " " + monthOfbirth + " " + yearsOfbirth }} </span>
            <b class="ms-1">อายุ : </b><span>{{ age }} </span>
            <br>
            <b class="ms-1">เลขที่บัตรประจำตัวประชาชน : </b><span>{{ ID_card }} </span>
            <b class="ms-1">วันออกบัตร : </b><span>{{ card_start_date }} </span>
            <b class="ms-1">วันหมดอายุ : </b><span>{{ card_end_date }} </span>
            <br>
            <b class="ms-1">ประเภทความพิการ : </b><span>{{ disabled_type }} </span>
            <br>
            <b class="ms-1">วุฒิการศึกษา : </b><span>{{ educational }} </span>
            <b class="ms-1">สาขาวิชา : </b><span>{{ major }} </span>
            <b class="ms-1">สถาบันศึกษา : </b><span>{{ university }} </span>
            <br>
            <b class="ms-1">จังหวัด : </b><span>{{ university_province }} </span>
            <b class="ms-1">วันสำเร็จการศึกษา : </b><span>{{ gradu_date }} </span>
            <b class="ms-1">คะแนนเฉลี่ยสะสม : </b><span>{{ dregree }} </span>
            <br>
            <b class="ms-1">อาชีพปัจจุบัน : </b><span>{{ nowjob }} </span>
            <b class="ms-1">สถานที่ทำงาน : </b><span>{{ job_place }} </span>
            <br>
            <b class="ms-1">สถานที่ติดต่อได้ทางไปรษณี : </b><span>{{ contact_address }} </span>
            <b class="ms-1">รหัสไปรษณี : </b><span>{{ contact_passcode }} </span>
            <b class="ms-1">โทรศัพท์ : </b><span>{{ contact_tel }} </span>
            <b class="ms-1">E-mail : </b><span>{{ contact_email }} </span>
        </p>
    </div>
    <div class="text-center mt-5">
        <span>
            <button @click="print_report" class="btn btn-light bg-m1 px-3 fw-bold rounded-5" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="45" height="45"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path>
                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path>
                    <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"></path>
                </svg>
                พิมพ์ใบสมัครสอบ
            </button>
        </span>

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

.position-relative svg {
    position: absolute;
    transform: translate(30px, -45px);
}
</style>