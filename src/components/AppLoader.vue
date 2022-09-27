<template>
  <div class="loader__body">
    <div class="loader">Loading...</div>
  </div>
</template>

<style lang="scss" >
    @import '../styles/var';

// .loader__body {
//     font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     font-size: 16px;
//     // position: fixed;
//     top: 0;
//     width: 100vw;
//     z-index: 3;
//     height: 100vh;
//     color: $dark-blue;
//     background: $dark-blue;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

.loader__body {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    color: $dark-blue;
    background: $dark-blue;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.loader:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
}
.loader:after {
    background: $dark-blue;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
@-webkit-keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>