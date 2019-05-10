<template>
      <div class="shopBox">
          <div class="box-install">
              <other-shop></other-shop>  
          </div>
      </div>
</template>

<script>
import otherShop from '../../../../../components/otherShop'
export default {
    name:'kindShop',
    components: {
       otherShop 
    },
    data () {
        return {
            title:'详情'
        }
    }
}
</script>


<style lang="scss" scoped>
     .shopBox{
        width: 100%;
        .box-install{
            margin-top: -30px;
            width: 100%;
        }
     }
</style>
