<template>
  <div class="works" ref="works">
    <!--<loading v-if="loading"></loading>-->
    <div class="head" ref="head">
        <div class="name">My <span style="color:#F1F3F8">Works</span></div>
    </div>
    
    <div ref="sections" style="z-index:-2"></div>

    <div style="background-color:white" id="proj">
      <div class="section_container">
        <div class="section_hint">
          <div style="padding-top:2px"><clipboard-icon size="16" class="icon" /></div>
          <div>internship & schoolwork</div>
        </div>
        <div class="title">Projects</div>

        <div class="wrapper" ref="wrapper">
          <div class="arrow arrow_left" ref="arrow_left"><chevron-left-icon size="40" style="width: 40px;" @click="toRight(false)"/></div>
          <div class="shade shade_left" ref="shade_left"></div>

          <div class="arrow arrow_right" ref="arrow_right"><chevron-right-icon size="40" style="width: 40px;" @click="toRight(true)"/></div>
          <div class="shade shade_right"></div>

          <div class="projects_flex" ref="scroll">

          <div class="project" ref="scroll_child" @click="toDetail(0)">
            <div class="project_container" style="background-color: white">
              <div>
                <img 
                  src="../assets/projects/microsoft.png"
                  style="object-fit: contain; width: 200px;" />
                <div class="project_info">2020 - Software Engineer</div>
              </div>
            </div>
            <div class="description_container">
              <div class="project_title">Cafe Log Viewer</div>
              <div class="project_content">While working as a SWE intern at Microsoft, I independently designed and developed a fully functional web app that would largely facilitate the work of my colleagues with proper visualisation of log data and preliminary data analysis. Additionally, I also proactively designed and incorporated ancillary functions that were not mentioned in the initial requirements, such as to allow selected admins to edit log schema for future updates, and to look into ways to enhance the security of the app. </div>
              <div class="more">VIEW MORE</div>
            </div>
          </div>

          <div class="project second" ref="scroll_child_sec" @click="toDetail(1)">
            <div class="project_container" style="background-color: #f7f7f7;">
              <div>
                <img 
                  src="../assets/projects/tencent.png"
                  style="object-fit: contain; width: 200px;filter: invert(64%) sepia(32%) saturate(680%) hue-rotate(136deg) brightness(92%) contrast(106%);" />
                <div class="project_info">2018 - Front-End Developer</div>
              </div>
            </div>
            <div class="description_container">
              <div class="project_title">Internal Management System</div>
              <div class="project_content">During my internship at Tencent, I collaborated with full-time employees and developed an internal system that would facilitate the management of the operating platform. To be more specific, colleagues from the product managing team or from third-party companies would use this system to create new articles or advertisements that would be shown on the Licaitong app (an app affliated to Wechat Pay), or to attain data of past articles or advertisements that have already been put onto the app by them. </div>
              <div class="more">VIEW MORE</div>
            </div>
          </div>

          <div class="project second" @click="toDetail(2)">
            <div class="project_container" style="background-color: white">
              <div>
                <img 
                  src="../assets/projects/smartclothing.png"
                  style="object-fit: contain; width: 50px;" />
                <div class="project_info">2020 - Android Developer</div>
              </div>
            </div>
            <div class="description_container" style="padding-bottom: 20px;">
              <div class="project_title">LittleBeats</div>
              <div class="project_content">LittleBeats is an Android app I developed for a research group at UIUC that would pair with monitoring devices and exchange messages with them. The current stage of the project aimed at collecting health-related data such as heart rates from babies for research purposes. And the app would allow parents (the primary users) to control the monitoring devices, such as to start/end recording, delete last x minutes' recordings etc.</div>
              <div class="more">VIEW MORE</div>
            </div>
          </div>

          <div class="project second" @click="toDetail(3)">
            <div class="project_container" style="background-color: #f7f7f7">
              <div>
                <div style="display:flex; justify-content: center; align-items: flex-end">
                <img 
                  src="../assets/projects/princess.png"
                  style="object-fit: contain; width: 28px;" />
                </div>
                <div class="project_info">2019 - Group Project</div>
              </div>
            </div>
            <div class="description_container">
              <div class="project_title">Go Princess</div>
              <div class="project_content">As part of the course: Game Development, we designed and developed a pixel RPG game named Go Princess in Unity within a group of 4. In the game, the princess is locked in a castle by her father due to her refusal to an arranged marrige. Instead of waiting for a prince to rescue her, she decided to escape the castle on her own. On her way out, she needs to solve some puzzles and find the key. Meanwhile, she should always find enough food to maintain her Health Points.</div>
              <div class="more">VIEW MORE</div>
            </div>
          </div>

          <div class="project second" @click="toDetail(4)">
            <div class="project_container" style="background-color: white">
              <div>
                <calendar-icon
                  size="30"
                  style="width: 30px; color: #3EBFCA" />
                <div class="project_info">2019 - Group Project</div>
              </div>
            </div>
            <div class="description_container" style="padding-bottom: 20px;">
              <div class="project_title">Organizational Tool</div>
              <div class="project_content">In a group of 5, we designed and developed a productivity application where students can manage dates, times, and reminders for their coursework and other activities more efficiently. Essentially, this app would add a user-defined priority label to different assignments helping to accentuate more important tasks at the user's will. In addition, it would provide the users with a general estimation about how busy they are on a given day.</div>
              <div class="more">VIEW MORE</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="section_container" style="margin-top:50px;" id="art">
      <div class="section_hint">
        <div style="padding-top:2px"><pen-tool-icon size="16" class="icon" /></div>
        <div>drawings, photography etc.</div>
      </div>
      <div class="title">Artworks</div>

      <div class="pic_container">
        <div class="pic_column" style="margin-right:3%">
            <img class="box" v-for="i in column1" :key="i" :src="getSrc(1, i)" style="width: 100%"/>
        </div>
        <div class="pic_column" style="margin-right:3%">
            <img class="box" v-for="i in column2" :key="i" :src="getSrc(2, i)" style="width: 100%"/>
        </div>
        <div class="pic_column">
            <img class="box" v-for="i in column3" :key="i" :src="getSrc(3, i)" style="width: 100%"/>
        </div>
      </div>

    </div>

    <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
  </div>
    
    
  </div>
</template>

<script>
//import BScroll from 'better-scroll'
import { ClipboardIcon, ChevronLeftIcon, ChevronRightIcon, PenToolIcon, CalendarIcon } from 'vue-feather-icons'

export default {
    name: 'Works',
    components: {
      ClipboardIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      PenToolIcon,
      CalendarIcon
    },
    data() {
        return {
            clientHeight: "",
            column1: 8,
            column2: 7,
            column3: 7,
            projects: ["Micro", "Ten", "Little", "Game", "Org"],
            loading: true,
            imgUrl: require('../assets/drawing/1.jpeg')
        }
    },
    mounted() {
        /*let bgImg = new Image()
        bgImg.src = this.imgUrl // 获取背景图片的url
        bgImg.onerror = () => {
          console.log('img onerror')
        }
        bgImg.onload = () => { // 等背景图片加载成功后 去除loading
          this.loading = false
        }*/

        this.clientHeight =   `${document.documentElement.clientHeight}`  
        let that = this

        window.onresize = function temp() {
          that.clientHeight = `${document.documentElement.clientHeight}`;
        };

        this.scrollInit;

        if (this.$route.params.jump === 0) {
          document.querySelector("#proj").scrollIntoView({
            behavior: "smooth",  // 平滑过渡
            block: "start"
          });
        } else if (this.$route.params.jump === 1) {
          document.querySelector("#art").scrollIntoView({
            behavior: "smooth",  // 平滑过渡
          });
        }
    },
    watch: {
        clientHeight: function () {
          this.changeFixed(this.clientHeight)
        }
    },
    methods: {
      getSrc(col, index) {
        var id = col + 3 * (index - 1)
        return require("../assets/drawing/"+ id +".jpeg");
      },
      changeFixed(clientHeight) {
          var temp = clientHeight - 80;
          var head_height = temp * 0.9;
      
          this.$refs.works.style.height = temp + 'px';
          this.$refs.head.style.height = head_height + 'px';
          this.$refs.sections.style.height = temp + 'px';
      },

      scrollInit() {
        // 获取要绑定事件的元素
        const scrollDiv = document.getElementById("scroll");
        // document.addEventListener('DOMMouseScroll', handler, false)
        // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
        scrollDiv.addEventListener('mousewheel', handler, false)
        // 滚动事件的出来函数
        function handler(event) {
          // 获取滚动方向
          const detail = event.wheelDelta || event.detail;
          // 定义滚动方向，其实也可以在赋值的时候写
          const moveForwardStep = 1;
          const moveBackStep = -1;
          // 定义滚动距离
          let step = 0;
          // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
          if (detail < 0) {
            step = moveForwardStep * 100;
          } else {
            step = moveBackStep * 100;
          }
          // 对需要滚动的元素进行滚动操作
          scrollDiv.scrollLeft += step;
        }
      },

      toRight(toRight) {
     
        this.$refs.arrow_left.style.visibility = "visible";
        this.$refs.shade_left.style.visibility = "visible";
        this.$refs.scroll_child.style.paddingLeft = "60px";
        // 获取当前容器的 scrollLeft 并计算接下去要移动的目标值
        let distance = this.$refs.scroll.scrollLeft
        let elWidth = distance == 0 ? this.$refs.scroll_child.offsetWidth : this.$refs.scroll_child_sec.offsetWidth;
        let total = toRight ? distance + elWidth : distance - elWidth;

        // 上述两者的差值即为要移动的距离，将其细分为小块，确保为正值
        let step = (distance - total) / 50
        if (step < 0) step = -step
        this.moveSlow(distance, total, step, toRight)
        
      },
      moveSlow(distance, total, step, toRight) {
       if (toRight) {
        // 每隔1毫秒移动一小段距离，直到移动至目标至为止，反之亦然
        if (distance < total) {
          distance += step
          this.$refs.scroll.scrollLeft = distance;
          setTimeout(() => {
            this.moveSlow(distance, total, step, toRight);
          }, 1)
        } else {
          this.$refs.scroll.scrollLeft = total;
          
        }
       } else {
         if (distance > total) {
            distance -= step;
            this.$refs.scroll.scrollLeft = distance;
            setTimeout(() => {
              this.moveSlow(distance, total, step, toRight);
            }, 1);
         } else {
           this.$refs.scroll.scrollLeft = total;
         }
       }
      },
      toDetail(index) {
        if (index === -1) {
          window.open('https://www.youtube.com/watch?time_continue=13&v=kgdDixfmbrU&feature=emb_logo')
        } else {
          this.$router.push({name: this.projects[index]});
        }
      }
    },
}
</script>

<style scoped>
.head {
  background: url('~@/assets/drawing/1.jpeg') center center no-repeat;
  background-size: 100%;
  width: 94%;
  margin: 3% 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  z-index: -1;
}
.head > div {
  text-align: right;
  margin-right: 40px
}
.name {
  margin-top: 23%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 100px;
  color: white;
}
.section_container {
  text-align: left;
  padding-top: 5%
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 10px 5%;
 
}
.section_hint {
  margin-left: 5%;
  color: #909090;
  font-size: 13px;
  display: flex;
  align-items: flex-start;
}
.icon {
  width: 13px; 
  margin-right: 5px;
}
.project {
  padding: 30px 0;
  display: flex;
  padding: 3% 10px;
  border-right: 1px solid #3EBFCA;
  padding-right: 5%;
  cursor: pointer;
}
.project_container {
  box-shadow: 2px 2px 15px #C0C4CC;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
}
.project_info {
  color: #909090;
}
.project_title {
  font-weight: bold;
}
.project_content {
  width: 450px;
  margin-top: 20px;
  text-align: bottom;
}
.description_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.second {
  padding-left: 6%;
}
.wrapper {
  background-color: white;
  margin: 0 5%;
  position: relative;
}
.projects_flex {
  overflow-x: auto;
  display: flex;
  margin-right: 30px;
}

.shade {
  position: absolute;
  content: '';
  
  height: 100%;
  top: 0;
  z-index: 1;
}
.shade_left {
  width: 60px;
  left: 0;
  box-shadow:inset 50px 0px  50px -10px #ffffff;
  visibility: hidden;
}
.shade_right {
  width: 100px;
  right: 0;
  box-shadow:-60px 0 30px 30px #ffffff inset;
}
.arrow {
  position: absolute;
  height: 100%;
  z-index: 2;
  color: #3EBFCA;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.arrow_right {
  right: 0;
  padding-right: 1%;
}
.arrow_left {
  left: 0;
  visibility: hidden;
}
.arrow:hover {
  cursor: pointer;
  color: black;
}
.arrow_disable {
  color: #909090;
}
.pic_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3% 5%;
}
.pic_column {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 80px;
}
.box {
  box-shadow: 3px 8px 10px 8px #F5F5F5;
  border-radius: 4px;
  margin-bottom: 50px;
}
.more {
  color: #3EBFCA;
  margin-top:10px;
  font-size: 13px;
  text-align: right;
  font-weight: bold;
}
.more:hover {
  color: black;
  
}
</style>