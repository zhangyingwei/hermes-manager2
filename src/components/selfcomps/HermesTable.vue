<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">{{tableInfo.name}}</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <tr>
          <th v-bind:style={width:c.width} v-for="c in tableInfo.column">{{c.name}}</th>
        </tr>
        <tr v-for="data in tableInfo.data">
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
      <ul class="pagination pagination-sm no-margin pull-right">
        <li><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableInfo']
}
</script>