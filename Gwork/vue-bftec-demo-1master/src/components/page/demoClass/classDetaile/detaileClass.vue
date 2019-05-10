<template>
    <div>
        <el-dialog title="班级列表" :visible.sync="show" :before-close="handleClose">
         <el-card>
        <el-form  v-loading="loading" ref="form" :model="form" label-width="80px">
            <el-form-item label="班级名称">
              <el-input v-model="form.className"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.type" placeholder="班级类型">
                <el-option 
                v-for="item in descClass"
                :key="item.id"
                :label="item.label"
                :value="item.value"  
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="班级描述">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="入学时间">
              <el-col :span="11">
                <el-date-picker  value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>

            </el-form-item>
            <el-form-item label="退学时间">
              <el-col :span="11">
                <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>

            </el-form-item>
     </el-form>
    </el-card>

  <div slot="footer" class="dialog-footer">
    <el-button @click="cancelSubmit">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </div>
</el-dialog> 
    </div>
</template>

<script>
import { resetData, resetForm, handlePostObjArr } from "@/util/index";
import classApi from '@/api/xy/classApi';
export default {
    name:'detaileClass',
    props: {
      show:Boolean
    },
    data() {
        return {
        loading:false,
        form: {
          id:'',
          className: '',
          type:'',
          desc: '',
          startTime: '',
          endTime: '',
         },
         descClass:[
             {
          label: "前端",
          value: "0"
        },
        {
          label: "UI",
          value: "1"
        }
         ]
        }
    },
    methods: {
        detaClassList(id){
           this.loading = true;
           this.form.id = id;
           classApi
             .detaClassList({
               id
             })
             .then(res=>{
               this.form = res.data;
                this.loading = false
             })
        },
       
        handleClose() {
          this.$emit("update:show", false);
          //重置表单
          resetForm(this);
      },
        cancelSubmit() {
            this.$confirm("尚未保存, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.handleClose();
            });
      },
        submit(){
            var xyClassInfo = {
                className:this.form.className,
                type:this.form.type,
                desc:this.form.desc,
                startTime:this.form.startTime,
                endTime:this.form.endTime
            };
            var api = "";
            var msgWord= "";
            if(this.form.id){
                api = classApi.upClassList;
                xyClassInfo.id = this.form.id;
                msgWord = "修改";
            } else{
                api = classApi.saveClassList;
                msgWord = "新增";
            }
            api({
               xyClassInfo
            }).then(res=>{
                if(res.code){
                  this.$message({
                  message: `${msgWord}成功!`,
                  type: "success"
              });
                 this.cancelSubmit();
                 this.$parent.getClassList();
                }else{
                     this.$message.error(`${msgWord}失败!`);
                }
            })

        },
    }
}
</script>

<style lang="scss" scoped>

</style>
