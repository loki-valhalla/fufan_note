<template>
  <div class="new-demo-list">
    <el-card>
      <el-dialog :visible.sync="show" title="收货地址" :before-close="handleClose">
        <el-form :model="form">
           <el-form-item label="作者" :label-width="formLabelWidth" class="title-item">
            <el-input v-model="form.author" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="作品" :label-width="formLabelWidth" class="title-item">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="文章标题" :label-width="formLabelWidth" class="title-item">
            <el-input v-model="form.desc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker
              value-format="yyyy-MM-dd HH-mm-ss"
              type="datetime"
              v-model="form.addTime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="活动区域">
            <el-select @change="handeType" v-model="form.type" placeholder="请选择活动区域">
              <el-option label="markdown" value="1"></el-option>
              <el-option label="富文本" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-card class="card-img">
            <el-upload
              class="upload-demo"
              action="/admin/xy/upload/uploadImg"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handSuccess"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <img :src="'http://59.110.138.169/'+form.cover" alt class="img-type">
            </el-upload>
          </el-card>

          <el-card>
            <!-- markdown编辑器 -->
            <div class="container">
              <mavon-editor
                v-if="typeContent1"
                @change="handleMdChange"
                v-model="form.content1"
                style="min-height: 600px"
              />
            </div>
            <!-- 富文本编辑器 -->
            <div>
              <quill-editor
                v-if="typeContent"
                ref="myTextEditor"
                v-model="form.content1"
                style="min-height: 600px"
              ></quill-editor>
            </div>
          </el-card>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import url from "@/api/url";
import urlApi from "@/api/xy/urlImg.js";
import { resetData, resetForm, handlePostObjArr } from "@/util/index";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "newDetail",
  components: {
    mavonEditor,
    quillEditor
  },
  props: {
    show: Boolean
  },
  data() {
    return {
      form: {
        id: "",
        author:"",
        title: "",
        cover: "",
        content1: " ",
        content2: " ",
        desc: "",
        addTime: "",
        img: "",
        type: "富文本"
      },
      img: "",
      formLabelWidth: "120px",
      content: "",
      // value1: true,
      // value2: true,
      typeContent: true,
      typeContent1: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handSuccess(res, file, fileList) {
      // console.log(res.url)
      // console.log(file)
      // console.log(fileList)
      this.img = url.upload + res.url; //url.upload,向这个地址上传图片
      // console.log(url.upload,res.url)
      this.form.cover = res.url; //相对路径
    },
    close() {
      this.$confirm("尚未保存, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.handleClose();
      });
    },
    // 富文本保存解析后的html代码
    handleMdChange(value, render) {
      this.form.content2 = render;
      // console.log('value',value);
      // console.log('render',render);
    },
    // 关闭表单
    handleClose() {
      this.$emit("update:show", false);
      //重置表单
      resetForm(this);
    },
    // 父组件调用这个用法,传一个ID进来,在调用urlApi,调用其中的方法,把内容传递给FORM
    detClass(id) {
      this.form.id = id;
      urlApi
        .detClass({
          id
        })
        .then(res => {
          this.form = res.data;
        });
    },
    // 上传
    submit() {
      var xyNews = {
        author:this.form.author,
        title: this.form.title,
        cover: this.form.cover,
        content1: this.form.content1,
        content2: this.form.content2,
        desc: this.form.desc,
        addTime: this.form.addTime
      };
      var api = "";
      var msgWord = "";
      if (this.form.id) {
        api = urlApi.upClass;
        xyNews.id = this.form.id;
       
        msgWord = "修改";
      } else {
        api = urlApi.saveClass;
        // console.log(api)
        msgWord = "添加";
      }
      api({
        xyNews
      }).then(res => {
        if (res.code) {
          // console.log(res);
          this.$message({
            message: `${msgWord}成功!`,
            type: "success"
          });
          this.handleClose();
          this.$parent.getUrlList();
        } else {
          this.$message.error(`${msgWord}失败!`);
        }
      });
    },
    handeType(value) {
      //  console.log(this.form.type)
      // console.log(value)
      if (value == "0") {
        this.typeContent = true;
        this.typeContent1 = false;
      } else {
        // console.log(value)
        this.typeContent = false;
        this.typeContent1 = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.new-demo-list {
  .upload-demo ::v-deep.el-upload--text {
    width: auto;
    height: auto;
    border: none;
  }
  .title-item {
    margin-left: -50px;
    &:nth-child(1) {
      margin-left: -75px;
    }
  }
  .card-img {
    margin: 50px;
  }
}
</style>
