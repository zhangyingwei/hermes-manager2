<template>
	<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../assets/AdminLTE/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{info.user.username}}</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="#" v-bind:class="{'active':c.active,'header':c.header}" v-for="c in info.menu.child">
          <router-link :to="c.link">
            <a v-if="!c.header" v-on:click="menuClick(c)">
              <i class="fa fa-link"></i>
              <span>{{c.name}}</span>
            </a>
            <span v-if="c.header">{{c.name}}</span>
          </router-link>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  props: ['location'],
  data () {
    return {
      info: {
        user: {
          username: 'fengche@126.com',
          logindate: '2016-10-25 20:02:00'
        },
        menu: {
          child: [
            {
              name: '订阅',
              link: '#',
              active: false,
              header: true
            },
            {
              name: '源管理',
              desc: 'RSS订阅源管理',
              link: '/rss/sitemanage',
              active: false
            },
            {
              name: '源审核',
              link: '#',
              active: false
            },
            {
              name: '文章',
              link: '#',
              active: false,
              header: true
            },
            {
              name: '文章审核',
              link: '#',
              active: false
            },
            {
              name: '历史文章',
              link: '#',
              active: false
            },
            {
              name: '订阅',
              link: '#',
              active: false,
              header: true
            },
            {
              name: '订阅管理',
              link: '#',
              active: false
            },
            {
              name: '管理',
              link: '#',
              active: false,
              header: true
            },
            {
              name: '分类管理',
              link: '#',
              active: false
            },
            {
              name: '标签管理',
              link: '#',
              active: false
            }
          ]
        }
      }
    }
  },
  methods: {
    menuClick: function (c) {
      this.info.menu.child.forEach(function (e) {
        e.active = false
      })
      c.active = true
      this.location.name = c.name
      this.location.desc = c.desc
    }
  }
}
</script>