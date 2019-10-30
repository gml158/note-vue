<template>
    <div style="width:500px; height:500px;">
        <div style="500px; height:500px;">
            <progressive-image
                :big-img="require('@/assets/loginbg.jpg')"
                :img-size="{w:2560, h:1600}"
                :thumbnail-img="require('@/assets/small.png')"
                v-if="show"
            />
        </div>
        <span @click="reset">查看</span>
    </div>
</template>
<script>
import progressiveImage from "./progressiveImage"
export default {
    data() {
        return {
            show: true,
        }
    },
    components: {
        progressiveImage,
    },
    methods: {
        reset() {
            this.show = false
            setTimeout(() => {
                this.show = true
            }, 100)
        },
    },
}
</script>
<style scoped>
</style>