<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 @click="decCount">{{$store.state.count}}</h1>
  </div>
</template>

<script>
export default {
  name:'about',
  methods: {
    decCount(){
      // this.$store.commit('desCount',2)
      this.$store.dispatch('desCount',{
          step:2
      });
    }
  }
  
}
</script>


