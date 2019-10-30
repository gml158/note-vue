<template>
    <div>
        <svg viewBox="0 0 210 210" style="width:400px; height:400px;" @click="getPoint($event)">
            <path :d="g" stroke-width="1" fill="none" stroke="#f7f1f1" />
            <g>
                <template v-for="(i, index) in 20">
                    <text :x="0" :y="i * 10" 
                        font-family="Verdana" 
                        font-size="5" :key="index">
                        {{i}}
                    </text>
                </template>
                <template v-for="(i, index) in 21">
                    <text :x="i * 10" :y="210" 
                        font-family="Verdana" 
                        font-size="5" :key="'v_'+index">
                        {{i}}
                    </text>
                </template>
            </g>
            <g v-if="point.length > 0">
                    <circle 
                    :cx="point.split(' ')[0]" 
                    :cy="point.split(' ')[1]" r="1" 
                    fill="#000"/>
            </g>
            <path :d="d" fill="none" stroke="red"/>
        </svg>
        <div>
            点：<input type="text" v-model="point" />
            <span @click="tD += point + ','">+</span>
        </div>
        <textarea v-model="tD" rows="5" style="width:400px"></textarea>
        <textarea v-model="d" rows="5" cols="50"></textarea>
        <span @click="d=tD">Draw</span>
    </div>
</template>
<script>
function getG() {
    let g = '';
    let start = 10;
    for(var i = 0; i < 21; i ++ ) {
        g += `
            M ${i * 10 + start} 0 L ${i * 10 + start} 200 
            M ${start} ${i * 10} L 210 ${i * 10} `
    }

    return g
}
export default {
    data() {
        return {
            g:getG(),
            d:"",
            tD:"",
            point:""
        }
    },
    methods:{
        getPoint(e) {
            let x = Math.floor(e.offsetX/2/10) * 10 + 10;
            let y = Math.floor(e.offsetY/2/10) * 10 + 10;
            this.point = `${x} ${y}`
        }
    }
}
</script>