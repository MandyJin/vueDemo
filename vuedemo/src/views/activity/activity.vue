<style lang='less' rel='stylesheet/less'>
  .activity{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="activity">
    <ul class="menu_box lt">
      <li>
        <router-link to='/activity1' activeClass='current'>转盘活动</router-link>
        <router-link to='/activity2' activeClass='current'>抽奖活动</router-link>
      </li>
    </ul>
    <div class="content_box scroll">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'activity',
    data () {
      return {

      }
    },
    mounted(){
      this.$store.dispatch("getuserInfo")
    },
    methods:{

    }
  }
</script>
