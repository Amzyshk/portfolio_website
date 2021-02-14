<template>
    <div class="game" style="margin-top: 40px">
        <div class="bg" ref="bg">
            <div class="bg_container">
                <div class="text_container">
                    <div class="title">Organizational Tool</div>
                    <div class="overview">In a group of 5, we designed and developed a productivity application where students can manage dates, times, and reminders for their coursework and other activities more efficiently. Essentially, this app would add a user-defined priority label to different assignments helping to accentuate more important tasks at the user's will. In addition, it would provide the users with a general estimation about how busy they are on a given day.</div>
                </div>
            </div>
            <div class="back" @click="toPro()"><chevron-left-icon size="20" style="margin-right: 9px; height: 20px" /><span>Back</span></div>
        </div>
        <div class="section">
            <div class="section_hint">
                <div style="margin-right: 6px">-</div>
                <div style="padding-top:2px"><book-open-icon size="16" class="icon" /></div>
                <div>summary</div>
                <div style="margin-left: 6px">-</div>
            </div>
            <div class="heading">App Functions</div>
            <div class="text">The user can define several priority lists with different sections such as Exams, Homework, Presentation etc., and for each section, the user can choose when to show it. For example, on priority list 1, "Exams" section is set to be shown 10 days before its due date. For each section, the user may also add several objectives. For instance, under "Exams" section there are 3 exams for 3 different courses.</div>
            <div class="img_box">
                <img
                    v-for="i in 2"
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
    name: 'Org',
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
          return require("../../assets/projects/org/"+i+".png")
      }
    }
}
</script>

<style scoped>
.bg {
    background: #2D8DB8;
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
  color: #2D8DB8;
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
    justify-content: center;
    margin: 30px 5%;
}
img {
    width: 25%;
    margin: 10px 50px;
    border-radius: 3px;
    box-shadow: 2px 2px 15px #C0C4CC;
}
</style>