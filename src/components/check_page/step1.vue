<template>
    <div class="px-5 mt-4 rounded-5 bg-m1 flex-column d-flex align-items-center justify-content-center"
        style="height: 250px;">
        <div class="bg-light rounded-5 d-flex align-items-center justify-content-center" style="width: 45px; height: 45px;">
            <h5 class="fw-bold text-m1 m-0">
                <span v-if="success == 'yes'">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class=" text-success icon icon-tabler icon-tabler-circle-check-filled" width="60" height="60"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </span>
                <span v-else-if="success == 'error'">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="text-warning icon icon-tabler icon-tabler-alert-circle-filled" width="60" height="60"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </span>
                <span v-else>
                    1
                </span>

            </h5>
        </div>
        <p class="m-0 text-light my-3 fw-bold">กรอกแบบฟอร์ม</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="text-light icon icon-tabler icon-tabler-clipboard-list" width="80px"
            height="80px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
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
</template>

<script>
export default {}
</script>

<script setup>
defineProps({
    success: String
})
</script>