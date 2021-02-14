var app = new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0,
    mm: 0
  },
  watch: {
    km: function (newValue) {
      this.km = newValue
      this.m = newValue * 1000
      this.mm = newValue * 1000000
    },
    m: function (newValue) {
      this.km = newValue / 1000
      this.m = newValue
      this.mm = newValue * 1000
    },
    mm: function (newValue) {
      this.km = newValue / 1000000
      this.m = newValue / 1000
      this.mm = newValue
    }
  }
})
