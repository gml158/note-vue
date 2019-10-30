<template>
    <div>
        <svg style="width:500px;" viewBox="0 0 100 60">
            <path :d="d" fill="none" stroke="red" />
            <path :d="d2" fill="none" stroke="#ccc" />
        </svg>
        {{a}}
        <!-- 角度<input style="width:50px;" type="number" v-model.number="angel" /> -->
        高度
        <input style="width:50px;" type="number" v-model.number="height" />
    </div>
</template>
<script>
function getY(a, r) {
    let d = (a / 360) * 2 * Math.PI
    return Math.sin(d) * r
}

function getX(a, r) {
    let d = (a / 360) * 2 * Math.PI
    return Math.cos(d) * r
}

function get45Point() {
    let point = []
    let d = (45 / 360) * 2 * Math.PI
    point[0] = 50 - Math.sin(d) * 50
    point[1] = 50 - Math.cos(d) * 50
    return point
}
function get135Point() {
    let point = []
    let d = (45 / 360) * 2 * Math.PI
    point[0] = 50 + Math.sin(d) * 50
    point[1] = 50 - Math.cos(d) * 50
    return point
}

export default {
    watch: {
        angel(val) {
            let x = 50 - getX(val, 50)
            let y = 50 - getY(val, this.height)
            this.d = `M 50, 50 L ${x}, ${y}`
        },
        height(val) {
            // let angel = this.angel;
            // let x = 50 - getX(angel, 50);
            // let y = 50 - getY(angel, this.height);
            // console.log(x);
            // this.d = `M 50, 50 L ${x}, ${y}`
            this.d2 = `M 0, 50 C ${get45Point().join(" ")} ${get135Point().join(" ")} 100 50`
        },
    },
    data() {
        return {
            d: "M 50, 50 L 0, 0",
            d2: `M 0, 50 C ${get45Point().join(" ")} ${get135Point().join(" ")} 100 50`,
            angel: 0,
            height: 50,
        }
    },
}
</script>
<style scoped>
</style>