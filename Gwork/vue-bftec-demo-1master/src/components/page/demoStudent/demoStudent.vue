<template>
    <div class="demo-main">
          <search-bar @search="handleSearch" :classList="classList" :dormList="dormList" ></search-bar>
        <el-card shadow="never">
            <div slot="header">
            </div>
            <el-button  type="success" @click="goEdit()" >添加</el-button>

             <el-row>
    <el-col :span="24">
        <el-table :data="studentList"  border style="width: 100%" class="table-main">

                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="id" label="id" width="100" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="120">
                </el-table-column>
                <el-table-column prop="tel" label="电话" width="100" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="qq" label="qq" width="80" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="school" label="学校" width="70" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="addTime" label="入学时间" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="endTime" label="结束时间" width="120" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="dormname" label="宿舍" width="120" show-overflow-tooltip>
                </el-table-column>
                 <el-table-column prop="job" label="工作" width="120" show-overflow-tooltip>
                </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-share" @click="goEdit(scope.row.id)" type="info" size="small"></el-button>
                        <el-button icon="el-icon-edit" @click="goEdit(scope.row.id)" type="success" size="small"></el-button>
                        <el-button @click="delNext(scope.row)" icon="el-icon-delete" type="danger" size="small"></el-button>
                    </template>
            </el-table-column>
        </el-table>
    </el-col>
            <el-col :span="12" class="pages">
                <my-pagination :page="page"  @page-change="handlePageChange"></my-pagination>
            </el-col>
        </el-row>
        </el-card>
         <!-- 弹窗 -->
        <student-detail  :show.sync="dialog" ref="detail" ></student-detail>
    </div>
</template>
<script>
 import studentDetail from './detalie/detalie'
 import xyApi from '@/api/xy/studentApi.js'
 import dormApi from '@/api/xy/dormApi'
 import classApi from '@/api/xy/classApi'
 import searchBar from './detalie/search'
 import studentApi from "@/api/xy/studentApi";
 import pageMixin from "@/mixin/pageMixin";
 import MyPagination from "@/components/common/Pagination";
    export default {
        name: 'demoStudent',
        components: {
            studentDetail,
            searchBar,
            MyPagination
        },
         mixins: [pageMixin],
        data() {
            return {
                dialog:false,
                studentList:[],
                classList:[],//班级信息,
                dormList:[], //宿舍信息   
            }
        },
        created() {
             this.initBaseInfo();
            this.getStudentList();
        },
        methods: {
           goEdit(id){
               console.log(id)
              this.dialog = true; 
              if(id){
                this.$refs.detail.getStudentById(id)
              }
           },
            getStudentList(searchForm = {}) {
                studentApi
                 .getStudentList({
                        start: this.page.start,
                       limit: this.page.limit,
                       ..._.pickBy(searchForm, v => v)
                 })
                    .then(res => {
                       this.studentList = res.data.list;
                       this.page.total = res.data.totalRow;
                       this.page.pageCount = res.data.totalPage;     
                    })
            },
            delNext(row){   
                xyApi.delStudent({id:row.id})
                  .then(res=>{
                       this.getStudentList()
                  })     
            },
            //查找
            handleSearch(form){
                this.getStudentList(form);
            },
            initBaseInfo(){
               dormApi.getDormList()
                  .then(res=>{
                     this.dormList = res.data.list
                  })
                classApi.getClassList()
                .then(res=>{
                this.classList = res.data.list;   
            })   
          },
          handlePageChange(){
              this.getStudentList()
          }
               
       },
    }
</script>

<style lang="scss" scoped>
    .serch-block {
        position: relative;

        .search-main {
            width: 240px;
            margin-right: 20px;
        }

        .search-bet {
            position: absolute;
            right: 50px;
            top: 80px;
        }
    }

    .table-main {
        margin: 30px auto;
    }
    .pages{
        margin-left: 600px;
    }
</style>