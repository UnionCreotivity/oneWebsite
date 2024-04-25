<template>
  <div class="arrow-container">
    <div class="arrow-left-line">
      <img src="../assets/finger/left-line.svg" alt="left-line" />
    </div>
    <div class="arrow-left">
      <img src="../assets/finger/left-arrow.svg" alt="left-arrow" />
      <img src="../assets/finger/left-arrow.svg" alt="left-arrow" />
      <img src="../assets/finger/left-arrow.svg" alt="left-arrow" />
      <img src="../assets/finger/left-arrow.svg" alt="left-arrow" />
    </div>
    <div class="arrow-finger">
      <img src="../assets/finger/finger.svg" alt="finger" />
      <div class="arrow-finger-circle"></div>
      <div class="arrow-finger-circle"></div>
      <div class="arrow-finger-circle"></div>
    </div>
    <div class="arrow-right">
      <img src="../assets/finger/right-arrow.svg" alt="right-arrow" />
      <img src="../assets/finger/right-arrow.svg" alt="right-arrow" />
      <img src="../assets/finger/right-arrow.svg" alt="right-arrow" />
      <img src="../assets/finger/right-arrow.svg" alt="right-arrow" />
    </div>
    <div class="arrow-right-line">
      <img src="../assets/finger/right-line.svg" alt="right-line" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
//主要內容物開始
.arrow-container {
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 59%;
  left: 31%;
  mix-blend-mode: plus-lighter;

  @media all and (max-width: 1024px) {
    display: flex;
    left: 7%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

//左右線寬度
.arrow-left-line,
.arrow-right-line {
  width: 8vw;
}

.arrow-right-line {
  margin-left: 1vw;
}

.arrow-left-line {
  margin-right: 1vw;
}

//左右箭頭寬高度
.arrow-right,
.arrow-left {
  width: 7vw;
  height: 2vw;
  z-index: 1;
}

@mixin finger($width, $height) {
  width: $width;
  height: $height;
}

//手指寬度
.arrow-finger {
  @include finger(4vw, 4vw);
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 0.5vw;
  position: relative;

  > img {
    position: absolute;
  }

  > div {
    position: absolute;
  }
}

//手指透明圓圈
.arrow-finger-circle {
  @include finger(4vw, 4vw);
  border-radius: 50%;
  border: 1px solid #fff;
  margin-top: -0.4vw;
  z-index: 0;
}

//手指圓圈透明動畫分配
.arrow-finger {
  > :nth-child(2) {
    animation: opaitcyCircle 4s infinite;
  }

  > :nth-child(3) {
    animation: opaitcyCircle 4s infinite 2s;
  }

  > :nth-child(4) {
    animation: opaitcyCircle 4s infinite 3s;
  }
}

//手指透明圓圈動畫
@keyframes opaitcyCircle {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}

//左邊箭頭動畫分配 中間向左擴散
.arrow-left {
  > :nth-child(1) {
    animation: opacityArrowAnimation 2s infinite 1s;
  }

  > :nth-child(2) {
    animation: opacityArrowAnimation 2s infinite 0.75s;
  }

  > :nth-child(3) {
    animation: opacityArrowAnimation 2s infinite 0.25s;
  }

  > :nth-child(4) {
    animation: opacityArrowAnimation 2s infinite;
  }
}

//右邊箭頭動畫分配 中間向右擴散
.arrow-right {
  > :nth-child(1) {
    animation: opacityArrowAnimation 2s infinite;
  }

  > :nth-child(2) {
    animation: opacityArrowAnimation 2s infinite 0.25s;
  }

  > :nth-child(3) {
    animation: opacityArrowAnimation 2s infinite 0.75s;
  }

  > :nth-child(4) {
    animation: opacityArrowAnimation 2s infinite 1s;
  }
}

//箭頭動畫
@keyframes opacityArrowAnimation {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0.7;
  }

  75% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.3;
  }
}

@media screen and (max-width: 500px) {
  .arrow-left-line,
  .arrow-right-line {
    width: 16vw;
  }

  .arrow-right-line {
    margin-left: 4vw;
  }

  .arrow-left-line {
    margin-right: 4vw;
  }

  .arrow-right,
  .arrow-left {
    width: 14vw;
    height: 6vw;
    z-index: 1;
  }

  .arrow-finger {
    @include finger(10vw, 10vw);
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 2.5vw;
  }

  .arrow-finger-circle {
    @include finger(10vw, 10vw);
    margin-top: -1vw;
  }
}
</style>
