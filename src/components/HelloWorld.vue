<template>
  <div class="hello" ref="hello">
    <loading v-if="loading"></loading>
    <div id="left_pan" >
      <div @click="toEdu()">A CONSTANT LEARNER</div>
      <div @click="toWork(0)">A SOFTWARE ENGINEER</div>
      <div @click="toWork(1)">AN ART-LOVER</div>
      <div @click="toContact()">AND MORE...</div>
    </div>
    <div id="img" style="width: 70%;" ref="imgPanel">
      <img 
        :onload="loadFin()"
        src="../assets/homepagePic-01.jpg"
        style="object-fit: contain; height: 95%; margin-right:5%; align: right" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      clientHeight: "",
      loading: true,
    }
  },
  mounted() {
    this.clientHeight =   `${document.documentElement.clientHeight}`  

    let that = this
    window.onresize = function temp() {
      that.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    loadFin() {
      this.loading = false;
    },
    changeFixed(clientHeight) {
      var temp = clientHeight - 70;
      this.$refs.hello.style.height = temp + 'px';
    },
    toEdu() {
      this.$router.push({name: 'About', params: {jump: true}})
    },
    toWork(index) {
      this.$router.push({name: 'Works', params: {jump: index}})
    },
    toContact() {
      this.$router.push({name: 'Contact'});
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display:flex;
  justify-content: center;
  width: 100%;
}
#left_pan {
  
  display: flex; 
  flex-direction:column;
  justify-content: flex-end;
  height: 95%;
}
#left_pan > div {
  text-align: right;
  margin: 5px 10px 10px 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
}
#left_pan > div:hover {
  text-decoration: underline;
  color: #3EBFCA;
  cursor: pointer;
}
</style>
