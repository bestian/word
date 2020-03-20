<template>
  <div class="hello">
    <h2 class="no-print"></h2>
    <h1 class="o" v-for="i in [1,2,3]" :key="i">
      <span :class="i > 1 ? 'print-only' : ''">{{ msg }}</span>
    </h1>
    <input class="no-print" v-model = "msg" placeholder="請輸入要印出的大字" />
    <a class = "button3 no-print" @click="pri(msg)">友善列印</a>
  </div>
</template>

<script>
export default {
  name: 'Print',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
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
  mounted () {
    this.msg = this.$route.params.id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.o {
  font-size: 120px;
  font-weight: 900;
  text-stroke: 2px black;
  -webkit-text-stroke: 2px black;
  color: transparent;
}

.print-only {
  visibility: hidden;
  display: none;
}

input {
  font-size: 20px;
  border: 2px solid green;
  border-radius: 5px;
  margin: 1em 0;
  padding: .2em;
}

@media print {
  .no-print {
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

</style>
