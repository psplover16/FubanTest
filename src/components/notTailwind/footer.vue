<template>
  <div class="mainContainer relative bg-top bg-no-repeat bg-cover bg-[#2C4664]">
    <div class="main">


      <div class="first">
        <div class="hotel">HOTEL</div>
        <div class="group">
          <div class="item"><img src="@/assets/images/Image_phone.svg" alt=""><span class="span1">(4321)
              0987-654-320</span></div>
          <div class="item"><img src="@/assets/images/Image_mail.svg" alt=""><span
              class="span1">support@hotel.com</span></div>
          <div class="item"><img src="@/assets/images/Image_location.svg" alt=""><span class="span2">33 Jaja Park Rd,
              Yellow,
              USA</span></div>
        </div>
      </div>

      <div class="second">
        <div>Subscribe</div>
        <div><input type="text" placeholder="Email"></div>
        <div>No spam. Only profit.</div>
      </div>


    </div>
  </div>
</template>



<script setup>

</script>


<style lang="scss" scoped>
  .mainContainer{
 height: 305px; 
}
.main {
  padding: 94px 0px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.first {
  margin-right: 10px;
  width: 733.25px;
  height: 100%;

  .hotel {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-56)/var(--unnamed-line-spacing-48) Heiti TC;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal 300 56px/48px Heiti TC;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    line-height: 56px;
  }

  .group {
    width: 100%;
    height: calc(117px - 56px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item {

      >img {
        height: 18px;
        object-fit: contain;
        opacity: 1;
        margin-right: 15px;
        display: inline-block;
        vertical-align: top;
      }

      .span1 {
        display: inline-block;
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

      .span2 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) Heiti TC;
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ffffff80);
        text-align: left;
        font: normal normal 300 18px/32px Heiti TC;
        letter-spacing: 0px;
        color: #FFFFFF80;
        opacity: 1;
        line-height: 18px;
      }
    }
  }
}

.second {
  width: 274px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  >div:nth-child(1) {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-32) Heiti TC;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: left;
    font: normal normal 300 24px/32px Heiti TC;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

    line-height: 24px;
  }

  >div:nth-child(2) {
    width: 100%;
    height: 48px;

    >input {
      width: 100%;
      height: 100%;
      border: 1px solid #DADADA;
      padding-left: 16px;
      // 
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-32) var(--unnamed-font-family-nunito-sans);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-33333380);
      text-align: left;
      font: normal normal 300 18px/32px Nunito Sans;
      letter-spacing: 0px;
      color: #33333380;

    }
  }

  >div:nth-child(3) {
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



@media (max-width: 1000px) {
  .first {
    .hotel {
      font: normal normal 300 42px/48px Heiti TC;
      line-height: 42px;
    }

    .group {
      height: calc(117px - 42px);

      .item {
        >img {
          height: 13.5px;
          margin-right: 11.25px;
        }

        .span1 {
          font: normal normal 300 13.5px/32px Heiti TC;
          line-height: 13.5px;
        }

        .span2 {
          font: normal normal 300 13.5px/32px Heiti TC;
          line-height: 13.5px;
          // margin-right: 10px;
        }
      }
    }
  }

}

@media(max-width:768px) {
  .mainContainer{
 height: 501px; 
}

  .main {
    padding: 75px 0px 80px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }




  .first {
    width: 100%;
    height: 100%;
    margin-bottom: -14px;
    margin-right: 0;

    .hotel {
      font: normal normal 300 56px/48px Heiti TC;
      line-height: 56px;
    }

    .group {
      width: 100%;
      margin-top: 18px;
      display: inline-block;

      .item {
        width: 100%;
        display: inline-block;
        margin-bottom: 14px;

        >img {
          height: 18px;
          margin-right: 15px;
        }

        .span1 {


          font: normal normal 300 18px/32px Heiti TC;

          line-height: 18px;
        }

        .span2 {
          font: normal normal 300 18px/32px Heiti TC;
          line-height: 18px;
        }
      }
    }
  }

  .second {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    >div:nth-child(1) {
      font: normal normal 300 24px/32px Heiti TC;
      line-height: 24px;
      margin-bottom: 23px;
    }

    >div:nth-child(2) {
     // margin-bottom: 18px;
    }
  }
}
</style>