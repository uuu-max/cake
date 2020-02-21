<template>
    <div id="address">
         <Header title='新建地址' back='true'></Header>
         <div class="content">
            <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            />
         </div>
         
    </div>
</template>
<script>
import Header from 'common/Header'
import Vue from 'vue';

export default {
    name:'Address',
     components:{Header},
    data() {
        return {
        areaList:{
          province_list:{
               360000: '江西省'
          },
          city_list: {
                360100: '南昌市',
                360400: '九江市',
                360900: '宜春市',
                
          },
          county_list:{
            360111: '青山湖区',
            360112: '新建区',
            360121: '南昌县',
            360123: '安义县',
            360124: '进贤县',
            360190: '经济技术开发区',
            360192: '高新区',
            360402: '濂溪区',
            360403: '浔阳区',
            360404: '柴桑区',
            360423: '武宁县',
            360424: '修水县',
            360425: '永修县',
            360426: '德安县',
            360428: '都昌县',
            360429: '湖口县',
            360430: '彭泽县',
            360481: '瑞昌市',
            360482: '共青城市',
            360483: '庐山市',
            360490: '经济技术开发区',
             360902: '袁州区',
            360921: '奉新县',
            360922: '万载县',
            360923: '上高县',
            360924: '宜丰县',
            360925: '靖安县',
            360926: '铜鼓县',
            360981: '丰城市',
            360982: '樟树市',
            360983: '高安市'
          }
        }

        }
    },
    methods: {
        onSave(e) {
            console.log(e)
             this.$router.push({name:'ordersDetail'})
            localStorage.address=JSON.stringify(e)
        },
        onDelete() {
        Toast('delete');
        }
    }


}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
    #address{
        .content{
            .m_t(45);
        }
    }
</style>