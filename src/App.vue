<template>
  <div id="app" class="wrapper">
    <main-header></main-header>
    <main-sidebar :location.sync="info.location"></main-sidebar>
    <content-wrapper :location="info.location"></content-wrapper>
    <main-footer></main-footer>
    <!--<control-sidebar></control-sidebar>-->
  </div>
</template>

<script>
import MainHeader from './components/header/MainHeader'
import MainSidebar from './components/sidebar/MainSidebar'
import ContentWrapper from './components/content/ContentWrapper'
import MainFooter from './components/footer/MainFooter'

export default {
  components: {
    MainHeader,
    MainSidebar,
    ContentWrapper,
    MainFooter
  },
  data () {
    return {
      info: {
        location: {
          name: '',
          desc: ''
        }
      }
    }
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css';
</style>