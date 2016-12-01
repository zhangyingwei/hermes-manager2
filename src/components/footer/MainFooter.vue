<template>
	<footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      {{info.company.info}}
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2016 <a :href="info.company.link">{{info.company.name}}</a>.</strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  data () {
    return {
      info: {
        company: {
          name: 'hermes',
          link: 'http://zhangyingwei.com',
          info: '版权所有，翻版必究'
        }
      }
    }
  }
}
</script>