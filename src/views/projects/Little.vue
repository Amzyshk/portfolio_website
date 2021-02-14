<template>
    <div class="game" style="margin-top: 40px">
        <div class="bg" ref="bg">
            <div class="bg_container">
                <div class="text_container">
                    <div class="title">LittleBeats (Android)</div>
                    <div class="overview">LittleBeats is an Android app I developed for a research group at UIUC that would pair with monitoring devices and exchange messages with them. The current stage of the project aimed at collecting health-related data such as heart rates from babies for research purposes. And the app would allow parents (the primary users) to control the monitoring devices, such as to start/end recording, delete last x minutes' recordings etc.</div>
                </div>
            </div>
            <div class="back" @click="toPro()"><chevron-left-icon size="20" style="margin-right: 9px; height: 20px" /><span>Back</span></div>
        </div>
        <div class="section">
            <div class="section_hint">
                <div style="margin-right: 6px">-</div>
                <div style="padding-top:2px"><book-open-icon size="16" type="book-open" class="icon" /></div>
                <div>summary</div>
                <div style="margin-left: 6px">-</div>
            </div>
            <div class="heading">Working in a Startup</div>
            <div class="text">My primary job was the development of the Android app. I designed and developed the following views based on the list of functions required. Basically, the app will automatically <span class="accent">detect the monitoring devices</span> nearby. After <span class="accent">establishing a connection</span> with a device, the app will <span class="accent">exchange messages</span> with it via <span class="accent">BLE</span>. Depending on the message received, the app will <span class="accent">render different elements</span> on the page. Since it was only a functional prototype aimed at preliminary testing, the UI was not optimized in terms of aesthetics. </div>
            <div class="text" style="margin-top: 20px">However, since this parttime job was to great extent carried out in a startup environment, from time to time, the scope of work would <span class="accent">go beyond the normal duty</span>. For example, in addition to the development of the Android app, I also contributed to the testing of the monitoring device and the collection of battery data. The team was small but united. During my time there, I <span class="accent">worked closely</span> with people in charge of other parts such as IOS development, hardware, management, research etc. Collaboration was very important whithin such a small team. </div>           
            <div class="img_box">
                <img
                    v-for="i in 4"
                    :key = i
                    :src="getSrc(i)"
                />
            </div>
        </div>
        
        <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
    </div>
</template>

<script>
import { ChevronLeftIcon, BookOpenIcon } from 'vue-feather-icons'

export default {
    name: 'Little',
    components: {
        ChevronLeftIcon,
        BookOpenIcon
    },
    data() {
        return {
            clientHeight: "",
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
        toPro() {
            this.$router.push({name: 'Works'})
        },
        changeFixed(clientHeight) {
          var temp = clientHeight - 150;
          
          this.$refs.bg.style.height = temp + 'px';
      },
      getSrc(i) {
          return require("../../assets/projects/little/"+i+".jpeg")
      }
    }
}
</script>

<style scoped>
.bg {
    background: #F2BC00;
    position: relative;
    width:  100%;
}
.back {
    position: absolute;
    left: 15px;
    top: 15px;
    display: flex;
    align-items: center;
}
.back:hover {
    cursor: pointer;
    color: white;
    font-weight: bold;
}
.bg_container {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 12% 0 10%;
}
.text_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 6%;
}
.text_container > .title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 40px;
}
.overview {
    text-align: left;
    width: 100%;
    color: white;
    font-size: 17px;
    padding-left: 70px;
}
.accent {
  color: #F2BC00;
  font-weight: bold;
}
.section {
    text-align: left;
    margin: 150px 5%;
}
.section_hint {
    text-align: center;
    display:flex;
    justify-content: center;
    color: #909090;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
}
.icon {
    width: 16px; 
    margin-right: 5px;
}
.heading {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}
.text {
    margin: 0 5%;
}
.img_box {
    display: flex;
    justify-content: space-between;
    margin: 30px 5%;
}
img {
    width: 20%;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 2px 2px 15px #C0C4CC;
}
</style>