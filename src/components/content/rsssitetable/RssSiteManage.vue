<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">{{info.table.name}}</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <tr>
          <th v-bind:style={width:c.width} v-for="c in info.table.column">{{c.name}}</th>
        </tr>
        <tr v-for="data in info.table.data">
          <td>{{data.id}}</td>
          <td>{{data.task}}</td>
          <td>
            <div class="progress progress-xs">
              <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
            </div>
          </td>
          <td><span class="badge bg-red">{{data.label}}</span></td>
        </tr>
      </table>
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
      <div class="col-sm-5">
        <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">第 {{info.table.page.pageIndex}} 页-共 {{info.table.page.totalPage}} 页</div>
      </div>
      <div class="col-sm-7">
        <ul class="pagination no-margin pull-right">
          <li v-bind:class={disabled:info.table.page.pageIndex==1} v-on:click="prev(info.table.page)"><a href="#">&laquo;</a></li>
          <li class="active"><a href="#">{{info.table.page.pageIndex}}</a></li>
          <li v-bind:class={disabled:info.table.page.pageIndex==info.table.page.totalPage} v-on:click="next(info.table.page)"><a href="#">&raquo;</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        table: {
          name: '这是一个测试表格Demo',
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
          ],
          page: {
            total: 100,
            totalPage: 50,
            pageIndex: 1,
            pageSize: 10
          }
        }
      }
    }
  },
  methods: {
    prev: function (page) {
      if (page.pageIndex > 1) {
        page.pageIndex--
      }
    },
    next: function (page) {
      if (page.pageIndex < page.totalPage) {
        page.pageIndex++
      }
    }
  }
}
</script>