const Vue = require('nativescript-vue/dist/index')
const ComingList = require('../components/coming-list')
const ColList = require('../components/col-list')
const loading = require('../components/loading')
const getComingList = require('../api/api').getComingList
const getHotList = require('../api/api').getHotList

module.exports = Vue.component('home', {
  data() {
    return {
      comingList: [],
      hotList: [],
      comingLoading: true,
      hotLoading: true
    }
  },
  computed: {
    comingListTemp: function () {
      if (this.comingList.length) {
        let list = this.comingList
        let temp = []
        for (let i = 0; i < 5; i ++) {
          temp.push(list[i])
        }
        return temp
      }
        return []
    },
    hotListTemp: function () {
      if (this.hotList.length) {
        let list = this.hotList
        let temp = []
        for (let i = 0; i < 5; i ++) {
          temp.push(list[i])
        }
        return temp
      }
        return []
    }
  },
  template: `
    <scroll-view>
      <loading v-if="hotLoading" />
      <stack-layout v-else>
        <stack-layout>
          <flexbox-layout justifyContent="space-between" alignItems="center" class="home-coming-title">
            <label style="padding-left: 10">即将上映</label>
            <label @tap="$router.push({name: 'more', params: {allMovies: comingList}})" style="padding-right: 20">查看更多></label>
          </flexbox-layout>
          <coming-list :subjects="comingListTemp" />
        </stack-layout>
        <flexbox-layout justifyContent="space-between" alignItems="center" class="home-coming-title">
          <label style="padding-left: 10">正在热映</label>
          <label @tap="$router.push({name: 'more', params: {allMovies: hotList}})" style="padding-right: 20">查看更多></label>
        </flexbox-layout>
        <col-list :movies="hotListTemp" />
      </stack-layout>
    </scroll-view>
  `,
  created () {
    getComingList().then((res) => {
      this.comingList = res.subjects
      this.comingLoading = false
    }).catch(err => {
        console.error(err)
    })
    getHotList().then(res => {
      this.hotList = res.subjects
      // this.hotLoading = false
    }).catch(err => {
        console.error(err)
    })
  }
})