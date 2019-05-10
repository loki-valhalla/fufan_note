<template>
    <div>
           <el-card>
            <el-button type="success"  @click="goEdit()">添加</el-button>
      </el-card>
    <el-card class="demo-class">
      <el-table :data="dormList" border style="width: 70%" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="bak" label="???" width="100"></el-table-column>
        <el-table-column prop="startTime" label="入学日期" width="150"></el-table-column>
        <el-table-column prop="endTime" label="毕业日期" width="150"></el-table-column>
         <el-table-column prop="position" label="老家" width="160"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="goEdit(scope.row.id)" type="text" size="small">查看</el-button>
            <el-button @click="goEdit(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="delEdit(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  
           <room-list ref="detail" :show.sync = 'dialog'></room-list>
            <el-col :span="12" class="pages">
                <my-pagination :page="page"  @page-change="handlePageChange"></my-pagination>
            </el-col>

    </div>
</template>

<script>
//  import drmoApi from '@/api/xy/dromApi';
 import drmoApi from '@/api/xy/dormApi';
 import roomList from './roomList/roomList'
  import MyPagination from "@/components/common/Pagination";
import pageMixin from "@/mixin/pageMixin";
export default {
    components:{
        roomList,
        MyPagination
    },
    name:'room',
    mixins: [pageMixin],
    data() {
        return {
            dialog:false,
            title:'宿舍管理',
            dormList:[]
        }
    },
    created() {
        this.getDrmoList()
    },
    methods: {
        getDrmoList(searchForm={}){
            drmoApi
            .getDormList({
                 start: this.page.start,
                limit: this.page.limit,
                ..._.pickBy(searchForm, v => v)
            })
               .then(res=>{
                   this.dormList = res.data.list;
                   this.page.total = res.data.totalRow;
                   this.page.pageCount = res.data.totalPage;   
               })
        },
        goEdit(id){
            this.dialog = true
            if(id){
                this.$refs.detail.getDormListDeta(id)
            }
        },
        delEdit(row){
            drmoApi.delDormListDeta({id:row.id})
               .then(res=>{
                    this.getDrmoList()   
               })
        },
        handlePageChange(){
            this.getDrmoList()
        }
    },
}
</script>
<style lang="scss" scoped>

</style>


