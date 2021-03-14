<template>
  <div id="app">
    <common-header />
    <div class="cotainer"><router-view /></div>
    <common-footer />
  </div>
</template>
<script>
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
export default {
  components: {
    CommonFooter,
    CommonHeader,
  },
};
</script>

<style lang="scss">
.cotainer {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
