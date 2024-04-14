<template>
  <div class="flex items-end justify-between absolute w-full h-16 top-0 left-0 z-[2]">
    <div class="w-[119px] h-10 text-left font-HeitiTC text-[40px] leading-10 tracking-normal text-white">
      HOTEL
    </div>
    <div class="flex w-[468px] h-full pt-[33px] mx-5 justify-between max-[950px]:hidden">
      <div class="text-center font-HeitiTC tracking-normal text-lg leading-[18px] text-white mr-[15px]"> About </div>
      <div class="text-center font-HeitiTC tracking-normal text-lg leading-[18px] text-white mr-[15px]"> Service </div>
      <div class="text-center font-HeitiTC tracking-normal text-lg leading-[18px] text-white mr-[15px]"> Rooms </div>
      <div class="text-center font-HeitiTC tracking-normal text-lg leading-[18px] text-white mr-[15px]"> Blog </div>
      <div class="text-center font-HeitiTC tracking-normal text-lg leading-[18px] text-white"> Contact </div>
    </div>
    <div class="flex">
      <div class="w-[170px] h-[48px] border border-solid border-[#FFFFFF4B] rounded-3xl flex justify-center items-center font-HeitiTC text-[16px] leading-6 tracking-[1px] text-white uppercase
      max-[485px]:w-[138px]
      max-[485px]:h-[48px]
      max-[485px]:text-[13px]
      max-[485px]:leading-5
      max-[485px]:tracking-[0.81px]
      " :style="{ color: usescreenWidth().special ? '#F5F6F7' : '' }">SIGN UP</div>
      <div class="hidden
      max-[950px]:inline-block
      max-[950px]:ml-[11px]
      ">
        <img src="@/assets/images/button_menu.svg" class="w-12 h-12">
      </div>
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


</style>
