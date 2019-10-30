<template>
<div style="text-align:left;">
    <div>canvas下载图片</div>
    <template>
        <div>
            <a :href="downCanvasImage" download="a.png">download</a>
        </div>
        <canvas ref="canvas"></canvas>
    </template>
</div>
</template>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            this.drawCanvas();
        });
    },
    data() {
        return {
            imgData:null,
            downCanvasImage:null,
            ctx: null
        };
    },
    methods: {
        drowImage() {
            this.imgData = this.$refs.canvas.toDataURL('image/png');
        },
        drawCanvas() {
            let canvas = this.$refs.canvas;
            if (canvas.getContext) {
                this.ctx = canvas.getContext("2d");

                this.ctx.fillRect(25, 25, 100, 100);
                this.ctx.clearRect(45, 45, 60, 60);
                this.ctx.strokeRect(50, 50, 50, 50);


                this.downCanvasImage = canvas.toDataURL('image/png').replace('image/png', 'application/octet-stream')
            }
        }
    }
};
</script>