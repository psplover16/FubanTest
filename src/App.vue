<template>
  <!-- <example msg="Vite + Vue" /> -->
  <router-view />
</template>


<script setup>
// import example from './components/example.vue'
import { onMounted } from 'vue';
import { useStore } from "@/store";
const { usescreenWidth } = useStore();
const { special } = usescreenWidth();
onMounted(() => {
  var getUrlString = location.href;
  var url = new URL(getUrlString);
  usescreenWidth().special = url.searchParams.get('special')
  // http://localhost:5173/?special=true#/
})
</script>


<style lang="scss">
html {
  margin: 0;

  body {
    padding: 0;
  }

  div {
    font-size: 0px;
  }
}

@font-face {
  font-family: 'Heiti TC';
  src: url('@/assets/heiti-tc-light.woff');
}

@font-face {
  font-family: 'Nunito Sans';
  src: url('@/assets/nunito-sans.regular.ttf');
}



.mainContainer {
  width: 100%;
  .main {
    margin: auto;
    max-width: 1170px;
  }
}

@media (max-width: 1200px) {
  .mainContainer {
    .main {
      max-width: 950px;
    }
  }
}

@media (max-width: 1000px) {
  .mainContainer {
    .main {
      max-width: 720px;
    }
  }
}

@media (max-width: 720px) {
  .mainContainer {
    .main {
      margin: 0 14px 0 15px;
    }
  }
}

:root {

  /* Colors: */
  --unnamed-color-ffffff: #FFFFFF;
  --unnamed-color-ffffff7d: #FFFFFF7E;
  --unnamed-color-333333: #333333;
  --unnamed-color-33333380: #33333380;
  --unnamed-color-ffffff80: #FFFFFF80;

  /* Font/text values */
  --unnamed-font-family-nunito-sans: Nunito Sans;
  --unnamed-font-style-normal: normal;
  --unnamed-font-weight-200: 200px;
  --unnamed-font-weight-300: 300px;
  --unnamed-font-weight-normal: normal;
  --unnamed-font-weight-bold: bold;
  --unnamed-font-size-12: 12px;
  --unnamed-font-size-14: 14px;
  --unnamed-font-size-18: 18px;
  --unnamed-font-size-20: 20px;
  --unnamed-font-size-24: 24px;
  --unnamed-font-size-40: 40px;
  --unnamed-font-size-56: 56px;
  --unnamed-font-size-72: 72px;
  --unnamed-character-spacing-0: 0px;
  --unnamed-line-spacing-16: 16px;
  --unnamed-line-spacing-24: 24px;
  --unnamed-line-spacing-32: 32px;
  --unnamed-line-spacing-48: 48px;
  --unnamed-line-spacing-64: 64px;
  --unnamed-line-spacing-80: 80px;
}

/* Character Styles */
.light-h1-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-72);
  line-height: var(--unnamed-line-spacing-80);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-h2-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-56);
  line-height: var(--unnamed-line-spacing-64);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-h3-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-40);
  line-height: var(--unnamed-line-spacing-48);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-h4-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-24);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-h5-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-24);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-label-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-bold);
  font-size: var(--unnamed-font-size-12);
  line-height: var(--unnamed-line-spacing-16);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-text-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-18);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.light-text_gray-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-18);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-33333380);
}

.light-text_small-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-14);
  line-height: var(--unnamed-line-spacing-24);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-33333380);
}

.dark-h1-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-72);
  line-height: var(--unnamed-line-spacing-80);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-h2-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-56);
  line-height: var(--unnamed-line-spacing-64);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-h3-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-200);
  font-size: var(--unnamed-font-size-40);
  line-height: var(--unnamed-line-spacing-48);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-h4-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-24);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-h5-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-24);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-label-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-bold);
  font-size: var(--unnamed-font-size-12);
  line-height: var(--unnamed-line-spacing-16);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-text-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-18);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}

.dark-text_gray-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-18);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff80);
}

.dark-text_small-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-14);
  line-height: var(--unnamed-line-spacing-24);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff7d);
}

.light-text_big-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-20);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-333333);
}

.dark-text_big-right {
  font-family: var(--unnamed-font-family-nunito-sans);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-300);
  font-size: var(--unnamed-font-size-20);
  line-height: var(--unnamed-line-spacing-32);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
}
</style>
