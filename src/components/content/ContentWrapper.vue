<template>
	<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        {{location.name}}
        <small>{{location.desc}}</small>
      </h1>
    </section>
    <!-- Main content -->
    <section class="content" id="content">
      <!-- Your Page Content Here -->
      <router-view></router-view>
        <!-- <hermes-table></hermes-table> -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
// import HermesTable from './tabledemo/HermesTable'
export default {
  // components: {
  //   HermesTable
  // },
  props: ['location'],
  data () {
    return {
      info: {
        table: {
          name: '这是一个测试表格',
          column: [
            {
              name: '编号',
              value: 'id',
              width: '60px'
            },
            {
              name: '任务',
              value: 'task'
            },
            {
              name: '完成程度',
              value: 'progress',
              class: ['progress', 'progress-xs']
            },
            {
              name: '标签',
              value: 'label',
              width: '80px'
            }
          ],
          data: [
            {
              id: 0,
              task: 'aaa',
              progress: 'bbbbb',
              label: '55%'
            }
          ]
        }
      }
    }
  }
}
</script>