
<template>
  <div class="student-detail-main">
    <!-- visible.sync  调用父组件 -->
    <el-dialog title="提示" :visible.sync="show" width="60%" :before-close="handleClose">
      <el-form :model="form" label-width="80px">
        <el-card class="form-card" shadow="never">
          <div slot="header">
            <span>基本信息</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="选择性别">
                  <el-option
                    v-for="item in sexOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="电话" prop="tel">
                <el-input v-model="form.tel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证">
                <el-input v-model="form.manID"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="学校">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8"></el-col>
          </el-row>
        </el-card>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handClose">取 消</el-button>
        <el-button type="primary" @click="handSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { resetData, resetForm, handlePostObjArr } from "@/util/index";
import xyApi from "@/api/xy/studentApi.js";
export default {
  name: "detalie",
  props: {
    show: Boolean //接受命令调用弹出框
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        qq: "",
        tel: "",
        school: ""
      },
      sexOption: [
        {
          label: "男",
          value: "男"
        },
        {
          label: "女",
          value: "女"
        }
      ]
    };
  },
  methods: {
   
    getStudentById(id) {
      this.form.id = id;
      xyApi
        .getStudentById({
          id
        })
        .then(res => {
          this.form = res.data;
        });
    },
    handleClose() {
      this.$emit("update:show", false);
      //重置表单
      resetForm(this);
    },
     // 弹窗出现后确认是否关闭
    handClose() {
      this.$confirm("尚未保存, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.handleClose();
      });
    },
    handSave() {
          var xyUser = {
            name: this.form.name,
            sex: this.form.sex,
            school: this.form.school,
            tel:this.form.tel,
            manID:this.form.manID
          };
          var api = "";
          var msgWord = "";
          if (this.form.id) {
            api = xyApi.updateStudent;
            xyUser.id = this.form.id;
            msgWord = "修改";
          } else {
            api = xyApi.saveStudent;
            msgWord = "新增";
          }
          api({
            xyUser
          }).then(res => {
            if (res.code) {
              console.log(res.code)
              this.$message({
                message: `${msgWord}成功!`,
                type: "success"
              });
              // 关闭对话框  同时刷新列表信息
              this.handClose();
              // this.getStudentList();
              this.$parent.getStudentList();
            } else {
              this.$message.error(`${msgWord}失败!`);
            }
          });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
