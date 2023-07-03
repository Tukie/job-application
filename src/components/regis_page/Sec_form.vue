<script setup>
import { ref } from 'vue';

function formSub() {


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms_cc = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms_cc).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });

}
</script>

<template>
    <form @submit.prevent="formSub" class="row g-3  needs-validation" novalidate>
        <div class="col-2">
            <label for="prefix" class="form-label">คำนำหน้า</label>
            <select class="form-select" id="prefix" value="Mark" required>
                <option value="" disabled selected>เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="mrs">นาง</option>
                <option value="miss">นางสาว</option>
            </select>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-3">
            <label for="fname" class="form-label">ชื่อ</label>
            <input type="text" class="form-control" id="fname" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-3">
            <label for="lname" class="form-label">นามสกุล</label>
            <input type="text" class="form-control" id="lname" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="nation" class="form-label">สัญชาติ</label>
            <input type="text" class="form-control" id="nation" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="ethnicity" class="form-label">เชื้อชาติ</label>
            <input type="text" class="form-control" id="ethnicity" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="birthday" class="form-label">วันเดือนปีเกิด</label>
            <input type="date" class="form-control" id="birthday" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="age" class="form-label">อายุ</label>
            <input type="text" maxlength="2" oninput="this.value = this.value.replace(/[^0-9]/g, '');" class="form-control"
                id="age" value="" required>
            <div class="valid-feedback">
            </div>
        </div>
        <!-- newline -->
        <div class="col-12"></div>
        <div class="col-4">
            <label for="id_card" class="form-label">บัตรประจำตัวประชาชน</label>
            <input type="text"
                oninput="this.value = this.value.replace(/[^0-9]/g, ''); if(this.value.length < 13) this.setCustomValidity('Minimum length is 13 digits.'); else this.setCustomValidity('');"
                minlength="13" maxlength="13" class="form-control" id="id_card" value="" required>
            <div class="valid-feedback">
            </div>
        </div>
        <div class="col-4">
            <label for="card_date_start" class="form-label">วันออกบัตร</label>
            <input type="date" class="form-control" id="card_date_start" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="card_date_end" class="form-label">วันบัตรหมดอายุ</label>
            <input type="date" class="form-control" id="card_date_end" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-12">
            <label for="" class="form-label">ประเภทความพิการ (กรณีผู้สมัครเป็นคนพิการ)</label>
            <div class="row">
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_1">
                        <label class="form-check-label" for="check_1">
                            พิการทางการมองเห็น
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_2">
                        <label class="form-check-label" for="check_2">
                            พิการทางการเคลื่อนไหวหรือร่างกาย
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_3">
                        <label class="form-check-label" for="check_3">
                            พิการทางการเรียนรู้
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_4">
                        <label class="form-check-label" for="check_4">
                            พิการทางออทิสติก
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_5">
                        <label class="form-check-label" for="check_5">
                            พิการทางการได้ยิน
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_6">
                        <label class="form-check-label" for="check_6">
                            พิการทางจิตใจ หรือพฤติกรรม
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_7">
                        <label class="form-check-label" for="check_7">
                            พิการทางสติปัญญา
                        </label>
                        <div class="invalid-feedback">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <label for="educational" class="form-label">วุฒิการศึกษา ปริญญา</label>
            <input type="text" class="form-control" id="educational" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="major" class="form-label">สาขาวิชา</label>
            <input type="text" class="form-control" id="major" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="name_university" class="form-label">สถาบันศึกษา</label>
            <input type="text" class="form-control" id="name_university" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="province" class="form-label">จังหวัด</label>
            <input type="text" class="form-control" id="province" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="end_edu_date" class="form-label">วันที่สำเร็จการศึกษา</label>
            <input type="date" class="form-control" id="end_edu_date" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="gpx" class="form-label">คะแนนเฉลี่ยสะสม</label>
            <input type="text"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
                class="form-control" id="gpx" maxlength="4" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-12"></div>
        <div class="col-4">
            <label for="job_now" class="form-label">อาชีพปัจจุบัน</label>
            <input type="text" class="form-control" id="job_now" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="job_place" class="form-label">สถานที่ทำงาน</label>
            <input type="text" class="form-control" id="job_place" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="districs_job" class="form-label">อำเภอ/เขต</label>
            <input type="text" class="form-control" id="districs_job" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="province_job" class="form-label">จังหวัด</label>
            <input type="text" class="form-control" id="province_job" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="tel_job" class="form-label">โทร</label>
            <input type="text" class="form-control" id="tel_job" value="" required
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="10">
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-12"></div>
        <div class="col-2">
            <label for="address" class="form-label">ที่อยู่ปัจจุบัน เลขที่</label>
            <input type="text" class="form-control" id="address" value="" required
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="10">
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-2">
            <label for="moo" class="form-label">หมู่ที่</label>
            <input type="text" class="form-control" id="moo" value="" required
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="10">
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="soi" class="form-label">ตรอก/ซอย</label>
            <input type="text" class="form-control" id="soi" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="road" class="form-label">ถนน</label>
            <input type="text" class="form-control" id="road" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="tambol" class="form-label">ตำบล/แขวง</label>
            <input type="text" class="form-control" id="tambol" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="district" class="form-label">อำเภอ/เขต</label>
            <input type="text" class="form-control" id="district" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="pronive" class="form-label">จังหวัด</label>
            <input type="text" class="form-control" id="pronive" value="" required>
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="passcode" class="form-label">รหัสไปรษณีย์</label>
            <input type="text" class="form-control" id="passcode" value="" required
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="5">
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="tel" class="form-label">โทรศัพท์</label>
            <input type="text" class="form-control" id="tel" value="" required
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="10">
            <div class="valid-feedback">

            </div>
        </div>
        <div class="col-4">
            <label for="tel" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="tel" value="" required>
            <div class="valid-feedback">

            </div>
        </div>

        <div class="col-12">
            <div class="bg-m2 py-5 rounded-4 text-center text-m1 fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="50"
                    height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
                โปรดตวจสอบข้อมูลอีกครั้งก่อนทำการบันทึกข้อมูล
            </div>
        </div>

        <div class="col-12">
            <div class="text-center">
                <button class="btn btn-light bg-m1 px-3 fw-bold rounded-5" type="submit"><svg
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="45"
                        height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M14 4l0 4l-6 0l0 -4"></path>
                    </svg>บันทึกข้อมูล</button>
            </div>
        </div>
    </form>
</template>




<script>
export default {};



</script>