<template>
  <div class="spiner"></div>
</template>

<style scoped>
.spiner {
  width: 50px;
  aspect-ratio: 1;
  display:grid;
  mask: conic-gradient(from 15deg,#0000,#000);
  -webkit-mask: conic-gradient(from 15deg,#0000,#000);
  animation: l26 1s infinite steps(12);
}
.spiner,
.spiner:before,
.spiner:after{
  background:
    radial-gradient(closest-side at 50% 12.5%,
    #1d4fd8 96%,#0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%,
    #1d4fd8 96%,#0000) 0 50%/80% 20% repeat-x;
}
.spiner:before,
.spiner:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.spiner:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {transform:rotate(1turn)}
}
</style>
