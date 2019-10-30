<template>
    <div style="font-size:20px; text-align:left;">
        <div v-if="false">
            <h2>贝塞尔</h2>
            <!-- <input type="text" v-model="up" /> -->
            <svg style="width:500px;height:150px;" version="1.1" viewBox="0 0 100 35" xmlns="http://www.w3.org/2000/svg">
                <path :d="d" fill="none" stroke="red" stroke-linecap="round" />
            </svg>
            <br />
            <span @click="changePath">变平</span>
            <span @click="reset">突起</span>
        </div>
        <div v-if="false">
            <h2>circle</h2>
            <svg style="width:80px; height:80px;transform: rotate(-90deg);" viewBox="0 0 80 80">
                <circle cx="40" cy="40" fill="none" r="36" stroke="#ccc" stroke-width="8" />
                <circle cx="40" cy="40" fill="none" r="36" stroke="blue" stroke-dasharray="10 99999" stroke-linecap="round" stroke-width="8" />
            </svg>
        </div>

        <svg-s />
    </div>
</template>
<script>
const d1 = "M 0, 30 L 35 30 C 40 20 , 55 20 , 60 30 L 90 30"
const d2 = "M 0, 30 L 0 30 C 50 30 , 55 30 , 90 30 L 90 30"

import svgS from "./svgS"
export default {
    components: {
        svgS,
    },
    data() {
        return {
            d: d1,
            up: 0,
            showSvg2: false,
        }
    },
    watch: {
        up(val) {
            let move = val
            let d = `M 0, 30 L 0,30 C 40 20 55 20 60 30 L 90 30`
            this.d = d
        },
    },
    methods: {
        changePath() {
            this.d = d2
        },
        reset() {
            this.d = d1
        },
    },
}
</script>
<style scoped>
path {
    transition: d 5s;
}
</style>