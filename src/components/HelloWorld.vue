<template>
  <div class="hello">
    <h1 class="o" v-for="i in getRange(max)" :key="i">
      <img v-if="img" :src="img" :style="{'width': ft*6 + 'vw'}">
      <br/>
      <span :style="{'font-size' : ft + 'em'}">{{ msg }}</span>
    </h1>
    <form class="no-print">
      <input class ="normal no-print" v-autofocus v-model = "msg" placeholder="請輸入要印出的字" />
      <br>
      行數<input class ="normal no-print"  type="number" v-model = "max" name="max">
      <br>
      大小<input class ="normal no-print" type="number" v-model = "ft" name="max">
      <hr>
      <input class = "no-print" type="checkbox" v-model = "useImg"> 要配圖嗎?
      <br/>
      圖片網址: <input v-show ="useImg" class ="normal no-print" v-autofocus v-model = "img" placeholder="請輸入圖片網址" />
      <br>
      <hr>
      <a class = "button3 no-print" @click="pri(msg)">友善列印</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      max: 3,
      ft: 10,
      useImg: false,
      img: ''
    }
  },
  methods: {
    getRange: function (n) {
      var ans = []
      for (var i = 0; i < n; i++) {
        ans.push(i)
      }
      return ans
    },
    pri: function (t) {
      this.$gtag.event('action', {
        event_category: 'print',
        event_action: t,
        event_label: t,
        value: t
      })
      window.print()
    }
  },
  watch: {
    max: function () {
      this.$forceUpdate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.o {
  font-size: 8px;
  font-weight: 900;
  text-stroke: 2px black;
  -webkit-text-stroke: 2px black;
  color: transparent;
}

.print-only {
  visibility: hidden;
  display: none;
}

input.normal {
  font-size: 20px;
  width: 150px;
  border: 2px solid green;
  border-radius: 5px;
  margin: 0.6em 0.5em;
  padding: .2em;
}

img {
  width: 62vw;
}

@media print {
  .no-print, br, hr {
    visibility: hidden;
  }
  .print-only {
    visibility: visible;
    display: block;
  }
}

a.button3 {
  font-size: 20px;
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  background-color:#2ea5e1;
  text-align:center;
  transition: all 0.2s;
  cursor: pointer;
}

a.button3:hover {
  background-color:#4095c6;
}

form {
  background-color: white;
  opacity: 0.86;
  border-radius: 50px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1em;
}

</style>
