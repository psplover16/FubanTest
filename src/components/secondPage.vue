<template>

  <div class="mainContainer min-h-screen relative bg-top bg-no-repeat bg-cover bg-[#EDF1F5]">
    <div class="main">

      <div class="w-full relative">
        <div class="secondPage_font">
          <div class="top">Luxury Plaza Hotel for You</div>
          <div class="middle">Distant orb has power to raise and purify our thoughts like a strain of sacred music.
          </div>
          <div class="bottom"><span>ABOUT US</span></div>
        </div>
        <div class="secondPage_Pic">
          <img src="@/assets/images/image_item.svg" class="secondPic">
          <div class="playArea">
            <img src="@/assets/images/button_player.svg" class="button_player">
            <div class="playArea_font">
              <div>Play video</div>
              <div>2:34</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>



</template>



<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>


<style lang="scss" scoped>
.main {
  // align-items: center;
  height: 100%;
  padding-top: 144px;


  >div {
    display: flex;
    justify-content: space-between;
    height: 570px;

    .secondPage_font {
      // width: 50%;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .top {
        max-width: 345px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-333333);
        text-align: left;
        font: normal normal 300 56px/64px Heiti TC;
        letter-spacing: 0px;
        color: #333333;
        opacity: 1;

        // margin-top: 190px;
      }

      .middle {
        max-width: 406px;
        // height: 70px;
        /* UI Properties */
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-33333380);
        text-align: left;
        font: normal normal 300 18px/32px Heiti TC;
        letter-spacing: 0px;
        color: #33333380;
        opacity: 1;

        margin-top: 24px;
      }

      .bottom {
        width: 170px;
        height: 48px;
        /* UI Properties */
        border: 1px solid var(--unnamed-color-333333);
        border: 1px solid rgba(51, 51, 51, 0.32);
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 28px;

        >span {
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) 16px/var(--unnamed-line-spacing-24) Heiti TC;
          color: var(--unnamed-color-333333);
          text-align: center;
          font: normal normal 300 16px/24px Heiti TC;
          letter-spacing: 1px;
          color: #333333;
          text-transform: uppercase;
          opacity: 1;
        }
      }

    }

    .secondPage_Pic {
      width: 570px;
      height: 560px;
      min-width: 346px;
      flex-shrink: 0;
      background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 20px 20px 40px #0000001A;
      border-radius: 30px;
      opacity: 1;
      position: relative;

      .secondPic {
        width: 100%;
        object-fit: contain;
      }

      .playArea {
        width: 100%;
        height: 140px;
        padding: 32px;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        background: white;
        border-radius: 0 0 30px 30px;

        .playArea_font {
          width: 100%;
          height: 100%;
          margin-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          >div:nth-child(1) {
            height: 24px;
            /* UI Properties */
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-32) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-333333);
            text-align: left;
            font: normal normal 300 24px/32px Heiti TC;
            letter-spacing: 0px;
            color: #333333;
            opacity: 1;
            line-height: 24px;
          }

          >div:nth-child(2) {
            height: 18px;
            /* UI Properties */
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-33333380);
            text-align: left;
            font: normal normal 300 18px/32px Heiti TC;
            letter-spacing: 0px;
            color: #33333380;
            opacity: 1;
            line-height: 18px;
          }
        }
      }
    }
  }



  @media (max-width: 1000px) {
    >div {
      .secondPage_font {
        .top {
          width: calc(100% - 10px);
          // height: 88px;
          /* UI Properties */
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-40)/var(--unnamed-line-spacing-48) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-333333);
          text-align: left;
          font: normal normal 300 40px/48px Heiti TC;
          letter-spacing: 0px;
          color: #333333;
          opacity: 1;
          padding: 0;
          line-height: 40px;
        }

        .middle {
          width: calc(100% - 10px);
          // height: 70px;
          /* UI Properties */
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-33333380);
          text-align: left;
          font: normal normal 300 18px/32px Heiti TC;
          letter-spacing: 0px;
          color: #33333380;
          opacity: 1;
          line-height: 18px;

          margin-top: 24px;
        }

        .bottom {
          width: 170px;
          height: 48px;
          /* UI Properties */
          border: 1px solid var(--unnamed-color-333333);
          border: 1px solid rgba(51, 51, 51, 0.32);
          border-radius: 24px;

          margin-top: 28px;

          >span {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) 16px/var(--unnamed-line-spacing-24) Heiti TC;
            color: var(--unnamed-color-333333);
            text-align: center;
            font: normal normal 300 16px/24px Heiti TC;
            letter-spacing: 1px;
            color: #333333;
            text-transform: uppercase;
            opacity: 1;
          }
        }
      }
      .secondPage_Pic {
        width: 346px;
        flex-shrink: 0;
        height: 560px;
        opacity: 1;
        margin-bottom: 153px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 20px 40px #0000001A;
        border-radius: 30px;
        opacity: 1;
        .secondPic {
          height: 100%;
          border-radius: 30px;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .main {
    // padding-top: 127px;
    // height: 1472px;
    // background: red;
    padding: 0;

    >div {
      display: flex;
      flex-direction: column;
      height: auto;
      // justify-content: flex-start;
      // align-items: flex-start;
      // justify-content: space-between;
      align-items: center;


      .secondPage_font {
        // width: 100%;
        // height: 560px;
        margin-top: 127px;
        margin-right: 0;

        .top {
          width: 100%;
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-40)/var(--unnamed-line-spacing-48) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-333333);
          text-align: left;
          font: normal normal 300 40px/48px Heiti TC;
          letter-spacing: 0px;
          color: #333333;
          opacity: 1;
          line-height: 40px;

          margin-top: 0px;
        }

        .middle {
          width: 100%;
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-33333380);
          text-align: left;
          font: normal normal 300 18px/32px Heiti TC;
          letter-spacing: 0px;
          color: #33333380;
          opacity: 1;
          line-height: 18px;

          margin-top: 29px;
        }

        .bottom {
          width: 170px;
          height: 48px;
          /* UI Properties */
          border: 1px solid var(--unnamed-color-333333);
          border: 1px solid rgba(51, 51, 51, 0.32);
          border-radius: 24px;

          margin-top: 28px;
          margin-bottom: 80px;

          >span {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) 16px/var(--unnamed-line-spacing-24) Heiti TC;
            color: var(--unnamed-color-333333);
            text-align: center;
            font: normal normal 300 16px/24px Heiti TC;
            letter-spacing: 1px;
            color: #333333;
            text-transform: uppercase;
            opacity: 1;
          }
        }
      }

      .secondPage_Pic {
        width: 346px;
        flex-shrink: 0;
        height: 560px;
        opacity: 1;
        margin-bottom: 153px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 20px 20px 40px #0000001A;
        border-radius: 30px;
        opacity: 1;

        .secondPic {
          // height: 100%;
          // border-radius: 30px;
          // object-fit: cover;
        }

        .playArea {
          width: 100%;
          height: 140px;
          padding: 32px;
          display: flex;
          align-items: center;

          .playArea_font {
            width: 100%;
            height: 100%;
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            >div:nth-child(1) {
              height: 24px;
              /* UI Properties */
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-32) Heiti TC;
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-333333);
              text-align: left;
              font: normal normal 300 24px/32px Heiti TC;
              letter-spacing: 0px;
              color: #333333;
              opacity: 1;
              line-height: 24px;
            }

            >div:nth-child(2) {
              height: 18px;
              /* UI Properties */
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-33333380);
              text-align: left;
              font: normal normal 300 18px/32px Heiti TC;
              letter-spacing: 0px;
              color: #33333380;
              opacity: 1;
              line-height: 18px;
            }
          }
        }
      }
    }

  }


}
</style>