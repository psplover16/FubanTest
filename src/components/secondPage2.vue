<template>

  <div class="w-full relative bg-top bg-no-repeat bg-cover bg-[#EDF1F5] h-[800px] max-[600px]:h-[1400px]">
    <div class="    
    m-auto
    max-w-[1170px] 
    max-[1200px]:max-w-[950px] 
    max-[1000px]:max-w-[720px] 
    max-[720px]:mt-0
    max-[720px]:mr-[14px]
    max-[720px]:mb-0
    max-[720px]:ml-[15px]

    h-full
    pt-36
    max-[600px]:p-0
    ">

      <div
        class="w-full relative flex justify-between h-[570px] max-[600px]:flex-col max-[600px]:h-auto max-[600px]:items-center">
        <div
          class="mr-[10px] flex flex-col justify-center max-[600px]:shrink-0 max-[600px]:mt-[319px] max-[600px]:mr-0">
          <div class="
          max-w-[345px]
          text-left
          font-HeitiTC
          tracking-normal
          text-[56px] 
          leading-[64px]
        text-[#333333]

          max-[1000px]:w-[calc(100%-10px)]
          max-[1000px]:text-[40px]
          max-[1000px]:leading-10
          max-[600px]:top-[1199px]
          ">Luxury Plaza Hotel for You</div>
          <div class="
          max-w-[406px]
          text-left
          font-HeitiTC
          tracking-normal
          text-lg
          leading-8
        text-[#33333380]
          mt-6
          max-[1000px]:w-[calc(100%-10px)]
          max-[1000px]:text-lg
          max-[1000px]:leading-[18px]
          max-[600px]:w-[346px]
          max-[600px]:mt-[29px]
          ">Distant orb has power to raise and purify our thoughts like a strain of sacred music.
          </div>
          <div class="
          w-[170px]
          h-12
          border
          border-[rgba(51,51,51,0.32)]
          border-solid
          rounded-3xl
          flex
          justify-center
          items-center
          mt-7
          max-[600px]:mb-20
          ">
            <span class="
            text-center
            font-HeitiTC
            tracking-[1px]
            text-base
            leading-6
            text-[#333333]
            uppercase
            ">ABOUT US</span>
          </div>
        </div>
        <div class="
        w-[570px]
        h-[560px]
        min-w-[346px]
        shrink-0
        bg-white
        bg-origin-padding
        shadow-[20px_20px_40px_0_#0000001A]
        rounded-[30px]
        relative

        max-[1000px]:w-[346px]
        max-[1000px]:mb-[153px]
        ">
          <img src="@/assets/images/image_item.svg" class="
          w-full
          object-contain
          max-[1000px]:rounded-[30px]
          max-[1000px]:h-full
          max-[1000px]:object-cover
          ">
          <div class="
          w-full
          h-[140px]
          p-8
          flex
          items-center
          absolute
          bottom-0
        bg-white
          rounded-b-[30px]
       
          ">
            <img src="@/assets/images/button_player.svg" class="button_player">
            <div class="
            w-full
            h-full
            ml-4
            flex
            flex-col
            justify-around
            ">
              <div class="
             h-6
             text-left
             font-HeitiTC
             tracking-normal
             text-2xl 
             leading-6
             text-[#333333]
              ">Play video</div>
              <div class="
              h-[18px]
              text-left
              font-HeitiTC
              tracking-normal
             text-lg 
             leading-[18px]
             text-[#33333380]
              ">2:34</div>
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




</style>