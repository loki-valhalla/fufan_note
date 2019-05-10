  <template>
  <div>
  
      <el-card>
            <el-button type="success"  @click="goEdit()">添加</el-button>
      </el-card>
    <el-card class="demo-class">
      <el-table :data="tepClassList" border style="width: 70%"  v-loading="loading"
    element-loading-text="拼命加载中" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="className" label="班级" width="100"></el-table-column>
        <el-table-column prop="type" label="类型" width="100">
        </el-table-column>
        <el-table-column prop="desc" label="描述" width="100"></el-table-column>
        <el-table-column prop="startTime" label="入学日期" width="150"></el-table-column>
        <el-table-column prop="endTime" label="毕业日期" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope" >
            <el-button @click="goEdit(scope.row.id)" type="text" size="small">查看</el-button>
            <el-button @click="goEdit(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="delEdit(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
         <class-detail  ref="detail" :show.sync="dialog"></class-detail>
         <el-col :span="12" class="pages">
                <my-pagination :page="page"  @page-change="handlePageChange"></my-pagination>
            </el-col>
  </div>
</template>

<script>
import classDetail from './classDetaile/detaileClass.vue'
import classApi from '@/api/xy/classApi';
 import MyPagination from "@/components/common/Pagination";
import pageMixin from "@/mixin/pageMixin";
export default {
  components: {
     classDetail,
     MyPagination
  },
  mixins: [pageMixin],
  data() {
    return {
      dialog:false,
      title: "班级管理",
      DeclassList:[],
      loading: true,
      
    };
  },
  created () {
      this.getClassList()
  },
  methods: {

      goEdit(id){
          this.dialog = true;
           if(id){
             this.$refs.detail.detaClassList(id)
           }
      },
      getClassList(searchForm={}){
          this.loading=true;
          classApi
          .getClassList({
               start: this.page.start,
                limit: this.page.limit,
                ..._.pickBy(searchForm, v => v)
          })
             .then(res=>{
                this.DeclassList = res.data.list;
                 this.page.total = res.data.totalRow;
                this.page.pageCount = res.data.totalPage;   
                this.loading=false;
             })
      },
      delEdit(row){
        classApi.delClassList({id:row.id})
           .then(res=>{
               this.getClassList()
           }) 
      },
      handlePageChange(){
        this.getClassList()
      }
 
  },
     // 计算属性
    computed: {
    tepClassList(){
      return this.DeclassList.map(item=>{
        var tmpType = "";
        if(item.type == 0){
          tmpType = "web前端班"
        }else{
          tmpType = "UI设计班"
        }
        return {...item,tmpType}
      })

    }
  },

};
</script>

<style lang="scss" scoped>
    
</style>
