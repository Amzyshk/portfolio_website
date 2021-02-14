<template>
  <div id="app">
    <div id="nav" v-show="!hidden">
      <router-link to="/">
        <div style="display:flex">
          <img src="./assets/logo.png" style="height:40px; margin-right: 10px"/>
          <div id="title">
            <div>Zhiying Ma</div>
            <div id="title_second_line">Portfolio</div>
          </div>
        </div>
      </router-link>
      <div id="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/works">Works</router-link>
        <!--<router-link class="link" to="/resume">Resume</router-link>-->
        <router-link class="link" to="/contact">Contact</router-link>
      </div>
    </div>
  
    <div class="wrap" style="width:80s%; margin-top: 70px" v-show="!hidden">
      <transition name="fade">
     
          <router-view class="content"/>

      </transition>
    </div>

    <div v-show="hidden" class="sorry">
      <img 
        src="./assets/logo.png"
        style="object-fit: contain; width: 25%;" />
      <div style="margin-top: 30px; width: 70%">
        Sorry, this site is not optimized for small screens. Please use desktop to view it.
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      trans: "",
      menuItems: ['About', 'Projects', 'Arts'],
      windowWidth: document.documentElement.clientWidth,
      hidden: false
    }
  },
  methods: {
    
  },
  watch: {
    
  },
  created() {
    var that = this;
    this.$nextTick(() => {
      if (that.windowWidth <= 1000) {
        this.hidden = true;
      }
    })
    
  },
  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
        return (() => {
          //window.fullHeight = document.documentElement.clientHeight;
          window.fullWidth = document.documentElement.clientWidth;
          //that.windowHeight = window.fullHeight;  // 高
          that.windowWidth = window.fullWidth; // 宽
          if (that.windowWidth <= 1000) {
            this.hidden = true;      
          } else {
            this.hidden = false;
          }
        })()
    };
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

.fade-enter-active {
  transition: all 1.1s ease;
}
.fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translatex(30px);
  opacity: 0;

}


.link {
  margin-left: 15px;
}

#nav a:hover {
  color: #3EBFCA;
}
#title, #links {
  font-size: 15px;
}
#title_second_line {
  text-align: start;
}
#title {
  font-variation-settings: 'wght' 700;
  line-height: 1.5em;
}
#app {
  font-family: "Poppins",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c2420;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#nav {
  padding: 30px 3% 10px 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 94%;
  background-color: white;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  height: 40px
}

#nav a.router-link-exact-active {
  color: #3EBFCA;
  cursor: default;
}

.sorry {
  display: flex;
  height: 100%;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
}
</style>
