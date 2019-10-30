<template>
    <div>
        <textQuestion :content="content">
            <Text slot="input_1">455</Text>
            <Text slot="input_2">334</Text>
        </textQuestion>
    </div>
</template>
<script>
import textQuestion from './component/textQuestion';
import Text from './component/text';
export default {
    data() {
        return {
            content:'<span>请填写{{1}}1{{3}}</span><span>请填写{{2}}</span>'
        }
    },
    components:{ textQuestion }
}
</script>
<style lang="scss" scoped>
//     div {
//         font-family:Helvetica,sans-serif; 
//         line-height:1.1;
//         width:3.1em; 
//         padding:.2em; 
//         border:solid .1em black; 
//         margin:1em 0;
//     }
</style>

