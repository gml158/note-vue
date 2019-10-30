<template>
    <div class="u3-cropper" style="text-align:left;">
        <input type="file" name="upload" @change="uploadFile($event)" ref="uploadFileInput" />
        <button @click="finish">查看图片</button>
        <template v-if="img">
            <div style="display:flex; padding-top:40px;">
                <div style="width:300px; height:300px; margin-right:60px; overflow:hidden;">
                    <vue-cropper
                        ref="cropper"
                        :autoCrop="true"
                        :autoCropWidth="274"
                        :autoCropHeight="274"
                        :canMoveBox="false"
                        :canMove="true"
                        :centerBox="false"
                        :img="img"
                        outputType="png"
                        :fixedBox="true"
                        :info="false"
                        :enlarge="2"
                        @realTime="realTime"
                    />
                </div>
                <div class="u3-cropper__preview">
                    <div style="display:inline-block;width:274px; height:274px; overflow:hidden; border-radius:50%; 
                    background:#fff;
                    zoom:0.13">
                        <img :src="previews.url" :style="previews.img"/>
                    </div>
                </div>
                <div class="u3-cropper__preview">
                    <div style="display:inline-block;width:274px; height:274px; overflow:hidden; border-radius:50%; 
                    background:#fff;
                    zoom:0.2">
                        <img :src="previews.url" :style="previews.img"/>
                    </div>
                </div>
            </div>

            <div v-if="modelSrc" style="margin-top:50px;width:300px; height:300px;">
                <img  :src="modelSrc" />
            </div>
        </template>
        
    </div>
</template>
<style scoped>
.u3-cropper >>> .cropper-view-box {
    border-radius: 50%;
    outline: none;
    /* border:1px solid rgba(178,178,178,1); */
}
.u3-cropper >>> .cropper-face {
    border-radius: 50%;
}
.u3-cropper__preview{
    width:60px; height:60px; box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#E8E8E8;
    margin-right:10px;
}
</style>
<script>
import { VueCropper } from "vue-cropper";

export default {
    data() {
        return {
            previews: {},
            img: null,
            modelSrc:null
        };
    },
    components: {
        VueCropper
    },
    mounted() {},
    methods: {
        uploadFile(e) {
            console.log(e);
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = e => {
                this.img = reader.result;
                console.log(this.img);
                // console.log( reader.result);  //或者 e.target.result都是一样的，都是base64码
            };
            reader.readAsDataURL(file);
        },
        changeScale(num) {
            num = num || 1;
            this.$refs.cropper.changeScale(num);
        },
        // 实时预览函数
        realTime(data) {          
            this.previews = data;
            console.log(data);
        },
        finish(){
            this.$refs.cropper.getCropData(data => {
                this.modelSrc = data;
            });
            this.$refs.cropper.getCropBlob(data => {
                let file = new File([data], new Date().getTime() + '.png' ,{type:'image/png'});
                console.log(file);
            });
        }
        
    }
};
</script>