<template>
    <nav class=" position-relative d-sm-block d-none shadow">
        <div class="d-flex flex-column text-m1 justify-content-between p-4 nav_c position-sticky sticky-top "
            style="background-color: F8F9FA;">

            <!-- Logo -->
            <h3 class="fw-bold "><img src="../public/favicon.png" alt="LOGO" class="img-fluid me-2"
                    style="width: 50px;">สมัครสอบ
            </h3>

            <!-- mainmenu -->
            <div class="mainmenu">
                <h5 class="fw-bold">เมนูหลัก</h5>
                <router-link to="/" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M10 12h4v4h-4z"></path>
                            </svg>
                        </div>
                        หน้าหลัก
                    </div>
                </router-link>

                <router-link to="/register" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-list"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2">
                                </path>
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z">
                                </path>
                                <path d="M9 12l.01 0"></path>
                                <path d="M13 12l2 0"></path>
                                <path d="M9 16l.01 0"></path>
                                <path d="M13 16l2 0"></path>
                            </svg>
                        </div>
                        สมัครสอบ
                    </div>
                </router-link>

                <router-link to="/check" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2">
                                </path>
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z">
                                </path>
                                <path d="M9 14l2 2l4 -4"></path>
                            </svg>
                        </div>
                        ตรวจสถานะการสมัคร
                    </div>
                </router-link>

                <router-link to="/serch" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                <path d="M21 21l-6 -6"></path>
                            </svg>
                        </div>
                        ค้นหารายชื่อ
                    </div>
                </router-link>

                <router-link to="/serchMap" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-search"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v8"></path>
                                <path d="M9 4v13"></path>
                                <path d="M15 7v5"></path>
                                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M20.2 20.2l1.8 1.8"></path>
                            </svg>
                        </div>
                        ค้นหาสถานที่สอบ
                    </div>
                </router-link>

                <router-link to="/print" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-printer" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2">
                                </path>
                                <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path>
                                <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z">
                                </path>
                            </svg>
                        </div>
                        พิมพ์ใบสมัครสอบ
                    </div>
                </router-link>

            </div>

            <!-- seconday -->
            <div class="seconmenu mt-1">
                <h5 class="fw-bold">เอกสารและคำถาม</h5>

                <router-link to="" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                                <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                                <path d="M9 8h6"></path>
                            </svg>
                        </div>
                        คู่มือการสมัครสอบ
                    </div>
                </router-link>
                <router-link to="/QA" class="nav-link rounded-2">
                    <div class="d-flex">
                        <div class="d-block item_">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                                <path d="M12 19l0 .01"></path>
                            </svg>
                        </div>
                        คำถามที่พบบ่อย
                    </div>
                </router-link>

            </div>

            <!-- Contact -->
            <div class="bg-dark rounded-4 p-3 bg-contact">
                <div class="circle bg-light fs-2 m-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-headset" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
                        <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
                        <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                        <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                    </svg>
                </div>
                <div class="mb-3">
                    <h5 class="text-light fw-bold text-center">ศูนย์ติดต่อ</h5>
                </div>
                <div class="bg-light rounded-5 text-dark text-center p-2 px-3 fw-bold ">โทร. 0610501728</div>
            </div>
        </div>


    </nav>
</template>
  
<script>
export default {
};
</script>

<style scoped>
* {
    transition: all .5s;
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav_c {
    height: 100vh;
    width: 250px;
    background-color: var(--bg_nav);
}

.item_ {
    width: 35px;
    margin: 2px 0;
    /* text-align: center; */
}


.nav-link {
    margin: 5px 0;
}

.nav-link:hover {
    opacity: .5;
}

.nav-link,
h5,
h1 {
    color: 536A7E;

}

.bg-contact {
    background: rgb(83, 106, 126);
    background: linear-gradient(0deg, rgb(138, 158, 175) 0%, rgba(255, 255, 255, 1) 100%);
}
</style>
  
