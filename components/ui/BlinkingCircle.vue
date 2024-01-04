<script setup></script>
<template>
    <div class="circle"></div>
</template>
<style scoped>
.circle {
  background-color: red;
  border-radius: 100px;
  width: 14px;
  height: 14px;
  -webkit-animation: glowing 800ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 800ms infinite;
  animation: glowing 1500ms infinite;
}
@-webkit-keyframes glowing {
  0% { background-color: #e9e0e0; -webkit-box-shadow: 0 0 2px #e9e0e0; }
  50% { background-color: #FF0000; -webkit-box-shadow: 0 0 8px #FF0000; }
  100% { background-color: #e9e0e0; -webkit-box-shadow: 0 0 2px #e9e0e0; }
}

@-moz-keyframes glowing {
  0% { background-color: #e9e0e0; -moz-box-shadow: 0 0 2px #e9e0e0; }
  50% { background-color: #FF0000; -moz-box-shadow: 0 0 8px #FF0000; }
  100% { background-color: #e9e0e0; -moz-box-shadow: 0 0 2px #e9e0e0; }
}

@-o-keyframes glowing {
  0% { background-color: #e9e0e0; box-shadow: 0 0 2px #e9e0e0; }
  50% { background-color: #FF0000; box-shadow: 0 0 8px #FF0000; }
  100% { background-color: #e9e0e0; box-shadow: 0 0 2px #e9e0e0; }
}

@keyframes glowing {
  0% { background-color: #e9e0e0; box-shadow: 0 0 2px #e9e0e0; }
  50% { background-color: #FF0000; box-shadow: 0 0 8px #FF0000; }
  100% { background-color: #e9e0e0; box-shadow: 0 0 2px #e9e0e0; }
}
</style>