<template>
  <div class="contact">
    <loading v-if="loading"></loading>
    <div ref=contact>
        <img src="../assets/logo.png" style="margin-top: 6%" :onload="loadFin()"/>
        <div style="display:flex; justify-content: center; margin-top:2%">
            <div class="option">
                <a href="mailto:u3533470@connect.hku.hk">
                    <mail-icon class="icon" />
                </a>
            </div>
            <div class="option">|</div>
            <div >
                <linkedin-icon class="icon" @click="toLink()" />
            </div>
        </div>
    </div>
    <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
  </div>
</template>

<script>
import { MailIcon, LinkedinIcon } from 'vue-feather-icons'

export default {
    name: 'Contact',
    components: {
      MailIcon,
      LinkedinIcon
    },
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
      var temp = clientHeight - 80;
      this.$refs.contact.style.height = temp + 'px';
    },
    toLink() {
      window.open('https://www.linkedin.com/in/zhiying-ma-7254221a0/')
    }
  },
}
</script>

<style scoped>
.option {
    margin-right: 2%;
}
a {
    color: black;  
}
.icon {
    position: relative;
    transition: transform 0.2s;
}
.icon:hover {
    cursor: pointer;
    color: #3EBFCA;
    transform: translate(0, -6px);
}

</style>