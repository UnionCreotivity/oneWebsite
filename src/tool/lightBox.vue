<template>
<teleport to="body">
    <transition name="showBox">
        <div v-if="modelValue" class="lightbox" :class="{'show': modelValue}">
            <div  class="box">
                <button class="close_btn" @click="emit('update:modelValue', false)">Ｘ</button>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</teleport>
</template>
<script setup lang='ts'>
    import {ref, watch} from 'vue'
    import {gsap} from 'gsap'

    defineProps(['modelValue'])
    const emit= defineEmits(['update:modelValue'])

</script>
<style lang='scss' scoped>

.showBox-enter-active,
.showBox-leave-active {
  transition: opacity 0.5s;
  opacity: 1;
  .box{
        transition: transform 0.4s;
        transform: translateY(0px);
  }
}

.showBox-enter-from,
.showBox-leave-to {
  opacity: 0;
}

.showBox-enter-from{
  .box{
    transform: translateY(40px);
  }
}
.showBox-leave-to{
  .box{
    transform: translateY(-40px);
  }
}

 .lightbox{
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 105;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;

    
    .box{
        position: relative;
        width: 80%;
        background-color: #fff;

        .close_btn{
            position: absolute;
            right: 0;
            top: 0;
            background-color: #e00f00;
            border: none;
            padding: 5px 7px;
            color: #fff;
        }

        .content{
            padding: 15px;

            h1,h2,h3,h4,p{
                font-family: 'Noto Sans TC', sans-serif;
            }
        }
    }
 }
</style>