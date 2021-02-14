<template>

        <section>
            
            <img src="../assets/loading.gif" alt="loading image"
            @touchmove.stop.prevent class="loading-img" />
        
        </section>

</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>
<style scoped lang="css">
/*.fadel-enter-active, .fadel-leave-active {
  transition: opacity 2s;
}
.fadel-leave-to {
  opacity: 0;
}*/
section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFFFFFE6;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loading-img {
    width: 20%;
    margin-top: 10px;
}
</style>