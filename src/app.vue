<template>
  <main>
    <RouterView />
  </main>
</template>
<script>
export default{
  title: "yes"
}
</script>
<style>
* { box-sizing: border-box; }

html,body{
  top:0;
  margin:0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  font-size: 18px;
  background-color: #212121;
  color: #ffffff;
  letter-spacing: .1rem;
}
</style>