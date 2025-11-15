<template>
  <div class="a4-wrapper">
    <!-- 上方控制區：選擇是否顯示姓名 / 日期（列印時不會出現） -->
    <div class="controls no-print">
      <span>姓名 / 日期欄位：</span>
      <label>
        <input type="radio" value="hide" v-model="mode">
        隱藏
      </label>
      <label>
        <input type="radio" value="show" v-model="mode">
        顯示
      </label>
    </div>

    <!-- A4 稿紙本體 -->
    <div
      class="page"
      style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:210mm; height:297mm; margin:auto; background:white;"
    >
      <header style="width:90%; display:flex; justify-content:space-between; margin-bottom:10px; padding-top: 10px;">
        <div style="font-weight:bold; font-size:14pt;">作文稿紙（共 150 字）</div>

        <!-- 用 mode 變數切換 display:none / display:flex -->
        <div :style="nameDateStyle">
          <span>姓名：</span><div style="border-bottom:1px solid black; width:80px;"></div>
          <span>日期：</span><div style="border-bottom:1px solid black; width:80px;"></div>
        </div>
      </header>

      <main
        style="display:flex; flex-wrap:wrap; width:90%; justify-content:center; align-content:center; flex:1; border:1px solid #000;"
      >
        <div
          v-for="n in 150"
          :key="n"
          style="border:1px solid #000; width:70px; height:70px; box-sizing:border-box;"
        ></div>
      </main>

      <footer
        style="width:90%; display:flex; justify-content:space-between; align-items:center; margin-top:10px; font-size:9pt;"
      >
        <button
          @click="printPage"
          style="border:1px solid #333; padding:4px 10px; background:white; cursor:pointer; font-size: 14pt;"
        >
          列印/匯出成 PDF
        </button>
        <span class="note">列印時請取消勾選「頁首及頁尾」</span>
        <span>尺寸：A4（直式），15×10 = 150 格</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'A4',
  data () {
    return {
      // 預設隱藏姓名 / 日期欄位
      mode: 'hide' // 'hide' or 'show'
    }
  },
  computed: {
    // 用一個 style 物件來控制 display:none / display:flex
    nameDateStyle () {
      return {
        display: this.mode === 'show' ? 'flex' : 'none',
        gap: '20px',
        alignItems: 'flex-end',
        fontSize: '10pt'
      }
    }
  },
  methods: {
    printPage () {
      window.print()
    }
  }
}
</script>

<style>
@page {
  size: A4 portrait;
  margin: 10mm;
}

html,
body {
  background: #f3f3f3;
  margin: 0;
  padding: 0;
}

/* 上方控制列樣式（只在螢幕上顯示） */
.a4-wrapper {
  padding-top: 10px;
}

.controls {
  width: 210mm;
  margin: 0 auto 10px auto;
  font-size: 14pt;
}

.controls label {
  margin-left: 8px;
}

.note {
  color: red;
  font-size: 14pt;
}

/* 列印時隱藏控制區與按鈕等 UI 元件 */
@media print {
  html,
  body {
    background: transparent;
  }

  .page {
    margin: 0;
    border: none;
  }

  button, .note,
  .no-print {
    visibility: hidden !important;
    display: none !important;
  }
}
</style>
