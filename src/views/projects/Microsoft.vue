<template>
  <div class="micro" style="margin-top: 40px">
    <div class="bg" ref="bg">
        <div class="bg_container">
            <div class="text_container">
                <div class="title">Cafe Log Viewer</div>
                <div class="overview">Cafe Log Viewer is a fully functional web app that facilitates the work of colleagues at Microsoft with proper visualization of log data and preliminary data analysis.</div>
            </div>
            <img src="../../assets/projects/micro/log.png" style="height: 400px"/>
        </div>
        <div class="back" @click="toPro()"><chevron-left-icon size="20" style="margin-right: 9px; height: 20px" /><span>Back</span></div>
    </div>
    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px;"><coffee-icon size="16" class="icon" /></div>
            <div>motivation</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">Complex Data with Weak Visualization Tools</div>
        <div class="text">I worked at Cafe team during my internship at Microsoft. Cafe serves as a layer in O365 that routes client requests to their respective servers. It produces a log for each request, which consists of <span class="accent">163 columns</span>, and this number is <span class="accent">continuously increasing</span>. Colleagues inside and outside Cafe team all needs the logs to, for instance, diagnose anomalies. However, the current log viewer not only <span class="accent">lacks a clear visualization</span> of the data, but it is also about to be <span class="accent">deprecated</span>. Therefore, I designed and developed a new web app called Cafe Log Viewer to fulfill this need.</div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><crosshair-icon size="16" class="icon" /></div>
            <div>objective</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">An Integrated Web App for All</div>
        <div class="text">What if there is <span class="accent">a single app</span> that <span class="accent">meets all user needs</span> related to cafe logs? The user can log into the app, query a particular log from the online data services by inputing parameters, or directly paste an existing log, and view the generated data report. Previously, in order to do this, the user will first query the data from one website, download the csv file there, and manually look for relevant data in an Excel table on their local computer, but with an integrated and improved site, this process will be <span class="accent">simplified into one centralized application</span>. </div>
        <div style="text-align: center; margin: 5% 0"><img src="../../assets/projects/micro/obj.png" style="width:80%"/></div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><clipboard-icon size="16" class="icon" /></div>
            <div>user research</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">Understanding the Users</div>
        <div class="text">In order to develop a more thourgh understanding of the users and moreover, their needs, I arranged a <span class="accent">user interview</span> with the major user group, i.e., members of the Cafe team. At the interview, I <span class="accent">observed the user behaviors</span>, listened to <span class="accent">their opinions on existing solutions</span>, and got to know their <span class="accent">further expectations</span>. With their input, I listed a series of target functions and worked out the initial design based on them.</div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><layers-icon size="16" class="icon" /></div>
            <div>project structure & technical details</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">Implementing the App</div>
        <div class="text">The app mainly consists of 4 parts, namely the front-end app, the back-end app, a Web API, and a database. All of them are deployed to Azure. </div>
        <div style="text-align: center; margin: 5% 0;"><img src="../../assets/projects/micro/1.png" style="width:80%; border-radius: 8px;"/></div>
        <div style="text-align: center; margin: 5% 0"><img src="../../assets/projects/micro/2.png" style="width:80%"/></div>
        <div style="text-align: center; margin: 5% 0"><img src="../../assets/projects/micro/3.png" style="width:80%"/></div>
    </div>

    <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
  </div>
</template>

<script>
import { CoffeeIcon, CrosshairIcon, ClipboardIcon, LayersIcon, ChevronLeftIcon } from 'vue-feather-icons'

export default {
    name: 'Micro',
    components: {
        CoffeeIcon,
        CrosshairIcon,
        ClipboardIcon,
        LayersIcon,
        ChevronLeftIcon
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
    }
}
</script>

<style scoped>
.bg {
    background: #3EBFCA;
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
  color: #3EBFCA;
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
    height: 16px;
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
</style>