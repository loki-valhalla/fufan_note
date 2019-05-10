<template>
    <div>
       <el-card>
              <el-dialog title="收货地址" :visible.sync="show" :before-close="handleClose">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.position"></el-input>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.bak"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                    <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-time-picker value-format="yyyy-MM-dd" placeholder="选择时间" v-model="form.endTime" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button @click="onClose">取消</el-button>
                </el-form-item>
                </el-form>
                </el-dialog>
       </el-card>
    </div>
</template>

<script>
import dormApi from '@/api/xy/dormApi'
import { resetData, resetForm, handlePostObjArr } from "@/util/index";
export default {
    name:'roomList',
    props: {
        show:Boolean
    },
    data() {
        return {
            formLabelWidth:'120px',
            form:{
                id:"",
                name:"",
                position:"",
                bak:"",
                startTime:"",
                endTime:""
            }
        }
    },
    methods: {
        getDormListDeta(id){
            this.form.id = id;
            dormApi
              .getDormListDeta({
                  id
              })
               .then(res=>{
                   this.form = res.data;
               })
        },
        handleClose(){
           this.$emit("update:show", false);
           //重置表单
            resetForm(this);
        },
        onClose(){
            this.$confirm("尚未保存, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.handleClose();
            });
        },
        onSubmit(){
           var xyDormInfo = {
                name:this.form.name,
                position:this.form.position,
                bak:this.form.bak
               
           }
           var api = "";
           var msgWord = "";
           if(this.form.id){
               api = dormApi.getDormListUp;
               xyDormInfo.id = this.form.id;
               msgWord="修改";
           }else{
               api = dormApi.saveDormList;
               msgWord= "新增"
           }
           api({
               xyDormInfo
           }).then(res=>{
               if (res.code) {
              this.$message({
                message: `${msgWord}成功!`,
                type: "success"
              });
              // 关闭对话框  同时刷新列表信息
              this.onClose();
              // this.getStudentList();
              this.$parent.getDrmoList();
            } else {
              this.$message.error(`${msgWord}失败!`);
            }
           })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

