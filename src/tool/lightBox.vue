<template>
<teleport to="body">
    <div v-if="isOpen" class="lightbox">
        <div  class="box">
            <button class="close_btn">Ｘ</button>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</teleport>
</template>
<script setup lang='ts'>
    import {ref} from 'vue'
    // let isOpen=ref(false) 


    defineProps(['isOpen'])
</script>
<style lang='scss' scoped>
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
        }
    }
 }
</style>