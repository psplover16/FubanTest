<template>
  <div class="w-full relative bg-top bg-no-repeat bg-cover bg-firstPage h-[880px] xl:min-h-screen">
    <!--  -->
    <!-- :style="{ height: usescreenWidth().special ? '100vh' : '' }" -->
    <!-- bg-firstPage  -->

    <div class="
    m-auto 
    max-w-[1170px] 
    max-[1200px]:max-w-[950px] 
    max-[1000px]:max-w-[720px] 
    max-[720px]:mt-0
    max-[720px]:mr-[14px]
    max-[720px]:mb-0
    max-[720px]:ml-[15px]
    ">
      <div class="w-full top-0 relative">
        <topBar />
        <div class="w-[329px] h-[232px] text-left text-white box-content pt-[226px]  
        tracking-normal
        text-7xl 
        leading-[80px]
        font-HeitiTC   
        
        max-[600px]:w-[256px]
        max-[600px]:h-[184px]
        max-[600px]:pt-[126px]
        max-[600px]:text-[56px]
        max-[600px]:leading-[64px]

           ">
          Exclusive Boutique Hotel
        </div>
        <div class="
        w-[207px] h-5 text-left text-white mt-[21px]  
        text-xl
        leading-8
        font-HeitiTC   
        tracking-normal
        max-[600px]:mt-[25px]
        max-[600px]:leading-5    
        ">
          Luxury Boutique Hotel
        </div>
        <div class="mt-[45px] w-auto flex">
          <div class="w-12 h-12 mr-2 rounded-[50%]">
            <img src="@/assets/images/Image_FB.svg" class="w-full object-contain">
          </div>
          <div class="w-12 h-12 mr-2 rounded-[50%]"> <img src="@/assets/images/image_twitter.svg"
              class="w-full object-contain"></div>
          <div class="w-12 h-12 mr-2 rounded-[50%]"> <img src="@/assets/images/Image_ig.svg"
              class="w-full object-contain"></div>
        </div>

        <div class="floatBlock w-full flex rounded-[15px] bg-[#2C4664] bg-left-top bg-no-repeat bg-clip-padding shadow-[10px_10px_20px_0_#00000019]
        h-[144px] mt-16 relative
        max-[600px]:h-[576px]
        max-[600px]:absolute
        max-[600px]:z-[2]
        max-[600px]:top-[448px]
        max-[600px]:mt-12
        max-[600px]:mb-0
        max-[600px]:mx-auto

        
        " @click="openCloseBar" v-if="barStatus">

          <img src="@/assets/images/button_dropDown.svg" class="absolute w-12 h-12 shadow-[10px_10px_20px_0_#0000001A] bottom-0 left-1/2 rounded-[50%] z-[2]
          -translate-x-1/2 translate-y-6
          ">

          <div class="floatBlockMain w-full relative flex max-[600px]:flex-col">
            <div class=" 
            flex w-1/4 flex-col px-8 border-r border-solid border-black
            max-[1200px]:px-5
            max-[1000px]:px-[10px]
            max-[720px]:px-[5px]
            max-[600px]:w-full
            max-[600px]:h-1/4
            max-[600px]:px-8
            max-[600px]:border-r-0
            max-[600px]:border-b
            ">

              <div class="text-left font-HeitiTC
              text-sm
              leading-[14px]
              tracking-normal              
              text-[#FFFFFF7E]
              py-7           
              ">
                ARRIVAL
              </div>
              <div class="flex">
                <div class="
              w-[62px] text-left font-HeitiTC
              text-[56px]
              leading-[56px]
              tracking-normal
            text-white
              mr-[22px]
              max-[1000px]:w-12
              max-[1000px]:text-[40px]
              max-[1000px]:leading-[40px]
              max-[1000px]:mr-[10px]
              max-[720px]:mr-[5px]
              max-[600px]:w-[62px]
              max-[600px]:h-14
              max-[600px]:text-[56px]
              max-[600px]:leading-[56px]
              max-[600px]:mr-[22px]
                ">18</div>
                <div class="right h-full">
                  <div class="top h-7">
                    <div class="inline-block h-[18px] text-left font-HeitiTC tracking-normal text-white
                    text-lg
                    leading-[18px]
                    max-[720px]:h-[15px]
                    max-[720px]:text-[13px]
                    max-[720px]:leading-[13px]
                    max-[600px]:h-[18px]
                    max-[600px]:text-[18px]
                    max-[600px]:leading-[18px]
                    ">
                      Oct, 2019
                    </div>
                    <img src="@/assets/images/button_onlyDropDown.svg" class="
                    inline-block w-[9px] object-contain ml-[11px] align-bottom
                    max-[1000px]:ml-[5px]
                    max-[600px]:ml-[11px]
                    ">
                  </div>
                  <div class="text-left font-HeitiTC
                    text-[14px]
                    leading-[14px]
                    tracking-normal
                  text-[#ffffff7e]
            ">Friday</div>
                </div>
              </div>

            </div>
            <div class="
            flex w-1/4 flex-col px-8 border-r border-solid border-black           
            max-[1200px]:px-5
            max-[1000px]:px-[10px]
            max-[720px]:px-[5px]
            max-[600px]:px-8
            max-[600px]:w-full
            max-[600px]:h-1/4
            max-[600px]:border-r-0
            max-[600px]:border-b
            ">

              <div class="text-left font-HeitiTC
              text-sm
              leading-[14px]
              tracking-normal              
              text-[#FFFFFF7E]
              py-7
              ">
                DEPARTURE
              </div>
              <div class="flex">
                <div class=" w-[62px] text-left font-HeitiTC
              text-[56px]
              leading-[56px]
              tracking-normal
            text-white
              mr-[22px]
              max-[1000px]:w-12
              max-[1000px]:text-[40px]
              max-[1000px]:leading-[40px]
              max-[1000px]:mr-[10px]
              max-[720px]:mr-[5px]
              max-[600px]:w-[62px]
              max-[600px]:h-14
              max-[600px]:text-[56px]
              max-[600px]:leading-[56px]
              max-[600px]:mr-[22px]">19</div>
                <div class="right h-full">
                  <div class="top h-7">
                    <div class="
                    inline-block h-[18px] text-left font-HeitiTC tracking-normal text-white
                    text-lg
                    leading-[18px]
                    max-[720px]:h-[15px]
                    max-[720px]:text-[13px]
                    max-[720px]:leading-[13px]
                    max-[600px]:h-[18px]
                    max-[600px]:text-[18px]
                    max-[600px]:leading-[18px]
                    ">
                      Oct, 2019
                    </div>
                    <img src="@/assets/images/button_onlyDropDown.svg" class="
                    inline-block w-[9px] object-contain ml-[11px] align-bottom
                    max-[1000px]:ml-[5px]
                    max-[600px]:ml-[11px]
                    ">
                  </div>
                  <div class="text-left font-HeitiTC
                    text-[14px]
                    leading-[14px]
                    tracking-normal
                    text-[#ffffff7e]">Saturday</div>
                </div>
              </div>


            </div>
            <div class="w-1/4 flex 
            max-[600px]:w-full
            max-[600px]:h-1/4
            max-[600px]:border-b-black
            max-[600px]:border-solid
            max-[600px]:border-b
            ">
              <div class="w-1/2 py-[18px] border-r border-solid border-black">
                <div
                  class="my-[10px] mx-auto text-center font-HeitiTC tracking-normal text-sm leading-[14px] text-[#ffffff7e]">
                  ADULTS
                </div>
                <div class="
                mt-[18px]
                px-[29px]
                w-full
                flex
                justify-around
                max-[1200px]:px-5
                max-[1000px]:px-[10px]
                max-[600px]:px-[29px]
                ">
                  <div class="text-left font-NunitoSans tracking-normal text-2xl leading-8 text-white
                  max-[720px]:text-[16px]
                  max-[600px]:text-[24px]
                  ">-</div>
                  <div class="text-left font-HeitiTC tracking-normal text-[56px] leading-[64px] text-white
                  max-[720px]:text-[42px]
                  max-[600px]:text-[56px]
                  ">2</div>
                  <div class="text-left font-NunitoSans tracking-normal text-2xl leading-8 text-white
                  max-[720px]:text-[16px]
                  max-[600px]:text-[24px]
                  ">+</div>
                </div>
              </div>



              <div class="w-1/2 py-[18px] border-r border-solid border-black">
                <div
                  class="my-[10px] mx-auto text-center font-HeitiTC tracking-normal text-sm leading-[14px] text-[#ffffff7e]">
                  CHILDREN
                </div>
                <div class="
                mt-[18px]
                px-[29px]
                w-full
                flex
                justify-around
                max-[1200px]:px-5
                max-[1000px]:px-[10px]
                max-[600px]:px-[29px]
                ">
                  <div class="text-left font-NunitoSans tracking-normal text-2xl leading-8 text-white
                  max-[720px]:text-[16px]
                  max-[600px]:text-[24px]
                  ">-</div>
                  <div class="text-left font-HeitiTC tracking-normal text-[56px] leading-[64px] text-white
                  max-[720px]:text-[42px]
                  max-[600px]:text-[56px]
                  ">2</div>
                  <div class="text-left font-NunitoSans tracking-normal text-2xl leading-8 text-white
                  max-[720px]:text-[16px]
                  max-[600px]:text-[24px]
                  ">+</div>
                </div>
              </div>
            </div>
            <div class="w-1/4 flex justify-center items-center
            max-[600px]:w-full
            max-[600px]:h-1/4
            ">
              <div class="
              h-12
              bg-[#C8FF8C]
              bg-origin-padding
              bg-left-top
              rounded-3xl
              flex justify-center items-center
              w-[226px]
              max-[1200px]:w-[210px]
              max-[1000px]:w-[170px]
              max-[720px]:w-[130px]
              max-[600px]:w-[226px]
              "><span class="
              text-center
              font-NunitoSans
              text-[16px]
              leading-6
              text-[#333333]
              tracking-[1px]
              uppercase
              max-[1000px]:text-xs
              max-[1000px]:leading-3
              max-[720px]:text-[10px]
              max-[720px]:leading-[10px]
              max-[600px]:text-[16px]
              max-[600px]:leading-6
              ">
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


<style lang="scss" scoped></style>
