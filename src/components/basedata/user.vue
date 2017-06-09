<template>
  <div class="user-container" >
    <span>user page</span>{{$route.params}}
    {{$route.path}}
    {{$route.query.id}}
    {{$route.hash}}
    {{$route.fullPath}}
    {{$route.name}}
    <div class="content" ref="abc"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
      data(){
        return {
            count:2
        }
      },
      watch:{
          '$route'(to,from){
              console.log(to);
              console.log(from);
          }
      },
    created(){
      console.log(`created`+this.count);
      console.log(this.$el)
    },
    mounted(){
      console.log("mounted"+this.count);
      console.log(this.$data.count);
      this.$refs.abc.innerHTML="我是一只鸟！";
      console.log(this.$el);
      console.log(document.getElementsByClassName("user-container"));
    }
  }
</script>
<style scoped>
</style>
