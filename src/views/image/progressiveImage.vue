<template>
    <div style="width:100%;height:100%;overflow:hidden; display:inline-block;">
        <div :class="{'bgimg':true, 'bigBg-zoom':loaded}" :style="bigImgStyle">
            <img :class="{'small':true, 'small_hide': loaded}" :src="thumbnailImg" :style="imgStyle" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bigImg: {
            require: true,
        },
        thumbnailImg: {
            require: true,
        },
        imgSize: {
            default: () => {},
            require: true,
        },
    },
    data() {
        return {
            loaded: false,
            imgClass: "small",
            bigImgStyle: null,
            imgStyle: null,
        }
    },
    created() {
        this.loadImg()
    },
    methods: {
        loadImg() {
            let imgSize = this.imgSize
            this.imgStyle = {
                marginTop: -imgSize.h / 2 + "px",
                marginLeft: -imgSize.w / 2 + "px",
                width: imgSize.w + "px",
                height: imgSize.h + "px",
            }
            this.bigImgStyle = Object.freeze({
                "background-image": `url(${this.bigImg})`,
            })

            let imgObj = new Image()
            imgObj.src = this.bigImg
            imgObj.onload = () => {
                this.loaded = true
            }
        },
    },
}
</script>
<style scoped lang="scss">
.u3-proImg__wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.bgimg {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: scale(1.2);
    transform-origin: center center;
    background-repeat: no-repeat;
    background-position: 50%;
    transition: transform 1s;

    & img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(1.3);
    }
}
.bigBg-zoom {
    transform: scale(1);
}
@keyframes thumbzoom {
    from {
        opacity: 1;
    }
    to {
        transform: scale(0.8);
    }
}
.small {
    position: absolute;
    top: 0;
    left: 0;
}
.small_hide {
    opacity: 0;
    animation: thumbzoom 0.5s 1;
}
</style>