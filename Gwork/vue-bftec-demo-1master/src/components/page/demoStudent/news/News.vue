<template>
  <div class="demo-news">
    <el-button type="success" @click="goEdit()">添加</el-button>
    <el-card>
      <el-table class="news" :data="detaNew" border style="width: 100%">
        <el-table-column show-overflow-tooltip fixed prop="id" label="ID" width="150"></el-table-column>
        <el-table-column show-overflow-tooltip fixed prop="author" label="作者" width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="title" label="作品" width="100"></el-table-column>
        <el-table-column label="头像" width="100">
                <template slot-scope="scope">
                    <div class="demo-image">
                        <el-image
                        style="width: 100px; height: 100px"
                        :src="scope.row.cover"
                        ></el-image>
                    </div>
                </template>
          </el-table-column>
        <el-table-column show-overflow-tooltip prop="addTime" label="加入时间" width="150"></el-table-column>
        <el-table-column show-overflow-tooltip prop="desc" label="标题" width="200"></el-table-column>
        <el-table-column prop="type" label="输入类型" width="50"></el-table-column>
        <el-table-column show-overflow-tooltip prop="content1" label="编译前" width="300"></el-table-column>
        <el-table-column show-overflow-tooltip prop=" " label="编译后" width="500"></el-table-column>
        <el-table-column fixed="right" label="操作" width="260">
          <template slot-scope="scope">
            <el-button type="primary" size="small">查看</el-button>
            <el-button @click="goEdit(scope.row.id)" type="info" size="small">编辑</el-button>
            <el-button @click="delEdit(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="12" class="pages">
        <my-pagination :page="page" @page-change="handlePageChange"></my-pagination>
      </el-col>
    </el-card>
    <!-- // 弹窗 -->
    <new-detail ref="detail" :show.sync="dialog"></new-detail>
  </div>
</template>
<script>
import url from "@/api/url";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import urlApi from "@/api/xy/urlImg";
import newDetail from "./newdetail/newDetail";
import pageMixin from "@/mixin/pageMixin";
import MyPagination from "@/components/common/Pagination";

export default {
  name: "news",
  components: {
    mavonEditor,
    newDetail,
    MyPagination,
    
  },
  mixins: [pageMixin],
  data() {
    return {
      dialog: false,
      img: "",
      content: "",
      newList: [],
      img:'',
     
    };
  },
  created() {
    this.getUrlList();
  },
  computed:{
     detaNew(){
         var handelList = []
           this.newList.map(item=>{     
          item.cover = url.upload + item.cover;
          handelList.push(item) ;     
        })
        return handelList  
     } 
  },
  methods: {
    goEdit(id) {
      this.dialog = true;
      if (id) {
        // 通过$refs调用子组件方法传递一个ID,
        this.$refs.detail.detClass(id);
      }
    },
    // 获取列表
    getUrlList(searchForm = {}) {
      urlApi
        .newsClass({
          start: this.page.start,
          limit: this.page.limit,
          ..._.pickBy(searchForm, v => v)
        })
        .then(res => {
          this.newList = res.data.list;
          console.log(this.newList)
          this.page.total = res.data.totalRow;
          // console.log(this.page.total)
          this.page.pageCount = res.data.totalPage;
          // console.log(this.page.pageCount)
        });
    },
    handlePageChange() {
      this.getUrlList();
    },
    // 删除
    delEdit(row) {
      
      urlApi.delClass({ id: row.id }).then(res => {
        this.getUrlList();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.upload-demo ::v-deep.el-upload--text {
  width: auto;
  height: auto;
  border: none;
}
.demo-news {
  .news {
    margin: 0 auto;
  }
}
</style>

