<template>
  <div class="topBar">
    <div class="hotel">HOTEL</div>
    <div class="btnGroup">
      <div> About </div>
      <div> Service </div>
      <div> Rooms </div>
      <div> Blog </div>
      <div> Contact </div>
    </div>
    <div class="rightGroup">
      <div class="sign" :style="{ color: usescreenWidth().special ? '#F5F6F7' : '' }">SIGN UP</div>
      <div class="list"><img src="@/assets/images/button_menu.svg" class="listImg"></div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'
import { useStore } from "@/store";
const { usescreenWidth } = useStore();





defineProps({
  msg: String,
})
</script>


<style lang="scss" scoped>
.topBar {
  // background: red;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 64px;
  top: 0;
  left: 0;
  z-index: 2;

  .hotel {
    width: 119px;
    height: 40px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-40)/var(--unnamed-line-spacing-48) Heiti TC;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal 300 40px/48px Heiti TC;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    line-height: 40px;
  }

  .btnGroup {
    display: flex;
    width: 468px;
    height: 100%;
    padding-top: 33px;
    margin: 0 20px;
    justify-content: space-between;

    // padding: 0 -5px;
    div {
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-ffffff);
      text-align: center;
      font: normal normal 300 18px/32px Heiti TC;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;

      line-height: 18px;
    }

    div:not(:last-child) {
      margin-right: 15px;
    }




  }

  .rightGroup {
    display: flex;

    .sign {
      width: 170px;
      min-width: 170px;
      height: 48px;
      border: 1px solid #FFFFFF4B;
      border-radius: 24px;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      // font-family: 'Helvetica' ;
      font: normal normal 300 16px/24px Heiti TC;
      letter-spacing: 1px;
      color: #FFFFFF;
      text-transform: uppercase;
      opacity: 1;
    }

    .list {
      display: none;

      .listImg {
        width: 48px;
        min-width: 48px;
        height: 48px;
      }
    }
  }

}

@media (max-width: 950px) {
  .topBar {
    .btnGroup {
      display: none;
    }

    .rightGroup {
      .list {
        display: inline-block;
        margin-left: 11px;
      }
    }

  }
}




@media (max-width: 485px) {
  .topBar {
    height: 64px;

    .btnGroup {
      display: none;
    }

    .rightGroup {
      .sign {
        width: 138px;
        min-width: 138px;
        height: 48px;
        border: 1px solid #FFFFFF4B;
        border-radius: 24px;
        opacity: 1;
        // 
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) 13px/20px Heiti TC;
        color: var(--unnamed-color-ffffff);
        text-align: center;
        font: normal normal 300 13px/20px Heiti TC;
        letter-spacing: 0.81px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
      }

      .list {
        display: inline-block;
        margin-left: 11px;
      }
    }
  }
}
</style>
