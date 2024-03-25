<template>
  <div class="mainContainer relative bg-top bg-no-repeat bg-cover bg-firstPage h-[880px] xl:min-h-screen">
    <!--  -->
    <!-- :style="{ height: usescreenWidth().special ? '100vh' : '' }" -->
    <!-- bg-firstPage  -->

    <div class="main">
      <div class="w-full top-0 relative">
        <topBar />
        <div class="Exclusive">
          Exclusive Boutique Hotel
        </div>
        <div class="Luxury">
          Luxury Boutique Hotel
        </div>
        <div class="pic3Area w-auto flex">
          <div class="icon"> <img src="@/assets/images/Image_FB.svg" class="iconPic"></div>
          <div class="icon"> <img src="@/assets/images/image_twitter.svg" class="iconPic"></div>
          <div class="icon"> <img src="@/assets/images/Image_ig.svg" class="iconPic"></div>
          <!-- <div class="text-red-700 text-white">1</div> -->

        </div>

        <div class="floatBlock flex" @click="openCloseBar" v-if="barStatus">

          <img src="@/assets/images/button_dropDown.svg" class="downArrow">


          <div class="floatBlockMain">
            <div class="ccard">

              <div class="ccardTop">
                ARRIVAL
              </div>
              <div class="ccardBottom">
                <div class="left">18</div>
                <div class="right">
                  <div class="top">
                    <div class="topfont">
                      Oct, 2019
                    </div>
                    <img src="@/assets/images/button_onlyDropDown.svg" class="topImg">
                  </div>
                  <div class="bottom">Friday</div>
                </div>
              </div>

            </div>
            <div class="ccard">

              <div class="ccardTop">
                DEPARTURE
              </div>
              <div class="ccardBottom">
                <div class="left">19</div>
                <div class="right">
                  <div class="top">
                    <div class="topfont">
                      Oct, 2019
                    </div>
                    <img src="@/assets/images/button_onlyDropDown.svg" class="topImg">
                  </div>
                  <div class="bottom">Saturday</div>
                </div>
              </div>


            </div>
            <div class="ccard3">
              <div class="w-1/2 ccard2">
                <div class="ccard2Top">
                  ADULTS
                </div>
                <div class="ccard2Bottom">
                  <div>-</div>
                  <div>2</div>
                  <div>+</div>
                </div>
              </div>




              <div class="w-1/2 ccard2">
                <div class="ccard2Top">
                  CHILDREN
                </div>
                <div class="ccard2Bottom">
                  <div>-</div>
                  <div>2</div>
                  <div>+</div>
                </div>
              </div>
            </div>










            <div class="w-1/4 flex justify-center items-center">
              <div class="checkAVAILABILITY_Btn flex justify-center items-center"><span>
                  CHECK AVAILABILITY
                </span></div>
            </div>
          </div>


        </div>
      </div>
    </div>




  </div>
</template>



<script setup>
import { ref } from 'vue'
import topBar from '@/components/topBar.vue'
import { useStore } from "@/store";
const { usescreenWidth } = useStore();


defineProps({
  msg: String,
})
const barStatus = ref(true);
const openCloseBar = () => {
  return;
  barStatus.value = !barStatus.value;
}
</script>


<style lang="scss" scoped>
// .main {
//   padding-bottom: 48px;
// }
.Exclusive {
  /* Layout Properties */
  width: 329px;
  height: 232px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-72)/var(--unnamed-line-spacing-80) Heiti TC;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal 300 72px/80px Heiti TC;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  box-sizing: content-box;
  padding-top: 226px;
}

.Luxury {
  /* Layout Properties */
  width: 207px;
  height: 20px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-32) Heiti TC;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal 300 20px/32px Heiti TC;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  line-height: 20px;
  margin-top: 21px;
}

.pic3Area {
  margin-top: 45px;

  .icon {
    width: 48px;
    height: 48px;
    // background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin-right: 8px;

    .iconPic {
      width: 100%;
      object-fit: contain;
      opacity: 1;
    }
  }
}

.floatBlock {
  width: 100%;
  height: 144px;
  background: #2C4664 0% 0% no-repeat padding-box;
  box-shadow: 10px 10px 20px #00000019;
  border-radius: 15px;
  opacity: 1;
  position: relative;
  margin-top: 64px;
  // padding-bottom: 18px;
  // padding: 0 0 18px 0;

  .downArrow {
    position: absolute;
    width: 48px;
    height: 48px;
    /* UI Properties */
    // background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    // background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 10px 10px 20px #0000001A;
    opacity: 1;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 24px);
    border-radius: 50%;
    z-index: 2;
  }

  .floatBlockMain {
    width: 100%;
    display: flex;
    position: relative;
    .ccard {
      display: flex;
      width: 25%;
      flex-direction: column;
      padding: 0 32px;
      border-right: 1px solid black;

      .ccardTop {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ffffff7d);
        text-align: left;
        font: normal normal 300 14px/24px Heiti TC;
        letter-spacing: 0px;
        color: #FFFFFF7E;
        opacity: 1;
        line-height: 14px;

        padding: 28px 0;
      }

      .ccardBottom {
        display: flex;

        .left {
          width: 62px;
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-ffffff);
          text-align: left;
          font: normal normal 300 56px/64px Heiti TC;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
          line-height: 56px;
          margin-right: 22px;
        }

        .right {
          // width: 90px;
          height: 100%;
          // background: red;

          .top {
            height: 28px;

            // display: flex;

            .topfont {
              display: inline-block;
              height: 18px;
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-ffffff);
              text-align: left;
              font: normal normal 300 18px/32px Heiti TC;
              letter-spacing: 0px;
              color: #FFFFFF;
              opacity: 1;

              line-height: 18px;
            }

            .topImg {
              display: inline-block;
              width: 9px;
              object-fit: contain;
              margin-left: 11px;
              vertical-align: bottom;
            }

          }

          .bottom {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff7d);
            text-align: left;
            font: normal normal 300 14px/24px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF7E;
            opacity: 1;
            line-height: 14px;
          }
        }
      }
    }

    .ccard3 {
      width: 25%;
      display: flex;

      .ccard2 {
        padding: 18px 0;
        // flex-direction: column;
        border-right: 1px solid black;

        .ccard2Top {
          margin: 10px auto;
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-ffffff7d);
          text-align: center;
          font: normal normal 300 14px/24px Heiti TC;
          letter-spacing: 0px;
          color: #FFFFFF7E;
          opacity: 1;
          line-height: 14px;
        }

        .ccard2Bottom {
          margin-top: 18px;
          // height: 28px;
          padding: 0 29px;
          width: 100%;
          display: flex;
          justify-content: space-around;

          div:nth-child(1),
          div:nth-child(3) {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-32) var(--unnamed-font-family-nunito-sans);
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: normal normal 300 24px/32px Nunito Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
          }

          div:nth-child(2) {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: center;
            font: normal normal 300 56px/64px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
          }
        }
      }
    }

    div:nth-child(4) {

      .checkAVAILABILITY_Btn {
        width: 226px;
        height: 48px;
        /* UI Properties */
        background: #C8FF8C 0% 0% no-repeat padding-box;
        border-radius: 24px;
        opacity: 1;

        span {
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-nunito-sans);
          color: var(--unnamed-color-333333);
          text-align: center;
          font: normal normal normal 16px/24px Nunito Sans;
          letter-spacing: 1px;
          color: #333333;
          text-transform: uppercase;
          opacity: 1;
        }
      }
    }
  }

}


@media (max-width: 1200px) {
  .floatBlock {
    .floatBlockMain {


      .ccard {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        border-right: 1px solid black;
      }

      .ccard3 {
        width: 25%;
        display: flex;

        .ccard2 {
          padding: 18px 0;
          // flex-direction: column;
          border-right: 1px solid black;

          .ccard2Bottom {
            margin-top: 18px;
            // height: 28px;
            padding: 0 20px;
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
        }
      }


      div:nth-child(4) {
        .checkAVAILABILITY_Btn {
          width: 210px;
          height: 48px;
          /* UI Properties */
          background: #C8FF8C 0% 0% no-repeat padding-box;
          border-radius: 24px;
          opacity: 1;
        }
      }
    }

  }

}

@media (max-width: 1000px) {
  .floatBlock {

    .floatBlockMain {

      .ccard {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        border-right: 1px solid black;

        .ccardBottom {
          .left {
            width: 48px;
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: normal normal 300 40px/64px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
            line-height: 40px;
            margin-right: 10px;
          }

          .right {
            .top {
              .topImg {
                margin-left: 5px;
              }
            }

          }
        }
      }

      .ccard3 {
        width: 25%;
        display: flex;

        .ccard2 {
          padding: 18px 0;
          // flex-direction: column;
          border-right: 1px solid black;

          .ccard2Bottom {
            margin-top: 18px;
            // height: 28px;
            padding: 0 10px;
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
        }
      }


      div:nth-child(4) {
        .checkAVAILABILITY_Btn {
          width: 170px;
          height: 48px;
          /* UI Properties */
          background: #C8FF8C 0% 0% no-repeat padding-box;
          border-radius: 24px;
          opacity: 1;

          span {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-nunito-sans);
            color: var(--unnamed-color-333333);
            text-align: center;
            font: normal normal normal 12px/24px Nunito Sans;
            letter-spacing: 1px;
            color: #333333;
            text-transform: uppercase;
            opacity: 1;
            line-height: 12px;
          }
        }
      }


    }





  }
}


@media (max-width: 720px) {
  .floatBlock {

    .floatBlockMain {

      .ccard {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
        border-right: 1px solid black;

        .ccardBottom {
          .left {
            width: 48px;
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: normal normal 300 40px/64px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
            line-height: 40px;
            margin-right: 5px;
          }

          .right {
            .top {
              .topImg {
                margin-left: 5px;
              }

              .topfont {
                display: inline-block;
                height: 15px;
                font: normal normal 300 13px / 32px Heiti TC;
                line-height: 13px;
              }
            }

          }
        }
      }

      .ccard2 {
        padding: 18px 0;
        // flex-direction: column;
        border-right: 1px solid black;

        .ccard2Bottom {
          margin-top: 18px;
          // height: 28px;
          padding: 0 10px;
          width: 100%;
          display: flex;
          justify-content: space-around;

          div:nth-child(1),
          div:nth-child(3) {
            font: normal normal 300 16px/32px Nunito Sans;
          }

          div:nth-child(2) {
            font: normal normal 300 42px/64px Heiti TC;
          }
        }
      }

      div:nth-child(4) {
        .checkAVAILABILITY_Btn {
          width: 130px;
          height: 48px;
          /* UI Properties */
          background: #C8FF8C 0% 0% no-repeat padding-box;
          border-radius: 24px;
          opacity: 1;

          span {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-nunito-sans);
            color: var(--unnamed-color-333333);
            text-align: center;
            font: normal normal normal 10px/24px Nunito Sans;
            letter-spacing: 1px;
            color: #333333;
            text-transform: uppercase;
            opacity: 1;
            line-height: 10px;
          }
        }
      }


    }


  }
}




@media (max-width: 600px) {

  // 低於375顯示~~
  .Exclusive {
    width: 256px;
    height: 184px;
    /* UI Properties */
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal 300 56px/64px Heiti TC;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

    box-sizing: content-box;
    padding-top: 126px;
  }

  .Luxury {
    width: 207px;
    height: 20px;
    /* UI Properties */
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-32) Heiti TC;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal 300 20px/32px Heiti TC;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

    line-height: 20px;
    margin-top: 25px;
  }

  .pic3Area {
    margin-top: 45px;

    .icon {
      width: 48px;
      height: 48px;
      // background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      margin-right: 8px;

      .iconPic {
        width: 100%;
        object-fit: contain;
        opacity: 1;
      }
    }
  }



  .floatBlock {
    width: 100%;
    height: 576px;
    background: #2C4664 0% 0% no-repeat padding-box;
    box-shadow: 10px 10px 20px #00000019;
    border-radius: 15px;
    opacity: 1;
    position: absolute;
    z-index: 2;
    margin: 48px auto 0 auto;
top: 448px;
// 會從448開始


    .floatBlockMain {
      display: flex;
    flex-direction: column;
      .downArrow {
        position: absolute;
        width: 48px;
        height: 48px;
        box-shadow: 10px 10px 20px #0000001A;
        opacity: 1;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 24px);
        border-radius: 50%;
      }

      .ccard {
        width: 100%;
        height: 25%;
        display: flex;
        padding: 0 32px;
        border-right: 0;
        border-bottom: 1px solid black;

        .ccardTop {
          font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-ffffff7d);
          text-align: left;
          font: normal normal 300 14px/24px Heiti TC;
          letter-spacing: 0px;
          color: #FFFFFF7E;
          opacity: 1;
          line-height: 14px;

          padding: 28px 0;
        }

        .ccardBottom {
          display: flex;

          .left {
            width: 62px;
            height: 56px;
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff);
            text-align: left;
            font: normal normal 300 56px/64px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;
            line-height: 56px;
            margin-right: 22px;
          }

          .right {
            // width: 90px;
            height: 100%;
            // background: red;

            .top {
              height: 28px;

              // display: flex;

              .topfont {
                display: inline-block;
                height: 18px;
                font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
                letter-spacing: var(--unnamed-character-spacing-0);
                color: var(--unnamed-color-ffffff);
                text-align: left;
                font: normal normal 300 18px/32px Heiti TC;
                letter-spacing: 0px;
                color: #FFFFFF;
                opacity: 1;

                line-height: 18px;
              }

              .topImg {
                display: inline-block;
                width: 9px;
                object-fit: contain;
                margin-left: 11px;
                vertical-align: bottom;
              }

            }

            .bottom {
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-ffffff7d);
              text-align: left;
              font: normal normal 300 14px/24px Heiti TC;
              letter-spacing: 0px;
              color: #FFFFFF7E;
              opacity: 1;
              line-height: 14px;
            }
          }
        }
      }

      .ccard3 {
        width: 100%;
        height: 25%;
        display: flex;
        border-bottom: 1px solid black;

        .ccard2 {
          padding: 18px 0;
          // flex-direction: column;
          border-right: 1px solid black;

          .ccard2Top {
            margin: 10px auto;
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) Heiti TC;
            letter-spacing: var(--unnamed-character-spacing-0);
            color: var(--unnamed-color-ffffff7d);
            text-align: center;
            font: normal normal 300 14px/24px Heiti TC;
            letter-spacing: 0px;
            color: #FFFFFF7E;
            opacity: 1;
            line-height: 14px;
          }

          .ccard2Bottom {
            margin-top: 18px;
            // height: 28px;
            padding: 0 29px;
            width: 100%;
            display: flex;
            justify-content: space-around;

            div:nth-child(1),
            div:nth-child(3) {
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-32) var(--unnamed-font-family-nunito-sans);
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-ffffff);
              text-align: left;
              font: normal normal 300 24px/32px Nunito Sans;
              letter-spacing: 0px;
              color: #FFFFFF;
              opacity: 1;
            }

            div:nth-child(2) {
              font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-64) Heiti TC;
              letter-spacing: var(--unnamed-character-spacing-0);
              color: var(--unnamed-color-ffffff);
              text-align: center;
              font: normal normal 300 56px/64px Heiti TC;
              letter-spacing: 0px;
              color: #FFFFFF;
              opacity: 1;
            }
          }
        }

      }



      div:nth-child(4) {
        width: 100%;
        height: 25%;

        .checkAVAILABILITY_Btn {
          width: 226px;
          height: 48px;
          /* UI Properties */
          background: #C8FF8C 0% 0% no-repeat padding-box;
          border-radius: 24px;
          opacity: 1;

          span {
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-nunito-sans);
            color: var(--unnamed-color-333333);
            text-align: center;
            font: normal normal normal 16px/24px Nunito Sans;
            letter-spacing: 1px;
            color: #333333;
            text-transform: uppercase;
            opacity: 1;
          }
        }
      }


    }

  }












}
</style>
