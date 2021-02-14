<template>
  <div class="micro" style="margin-top: 40px">
    <div class="bg" ref="bg">
        <div class="bg_container">
            <div class="text_container">
                <div class="title">Internal Management System</div>
                <div class="overview">The Internal Management System is a web app that facilitates the management of the operating platform. To be more specific, colleagues from the product managing team or from third-party companies would use this system to create new articles or advertisements that would be shown on the Licaitong app (an app affliated to Wechat Pay), or to attain data of past articles or advertisements that have already been put onto the app by them.</div>
            </div>
            
        </div>
        <div class="back" @click="toPro()"><chevron-left-icon size="20" style="margin-right: 9px; height: 20px" /><span>Back</span></div>
    </div>
    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><home-icon size="16" class="icon" /></div>
            <div>background</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">About the Company, Department and Team</div>
        <div class="text">During my internship at Tencent, I worked at the web development team of Licaitong, an asset management platform accessible mostly through Wechat Pay. </div>
        <div class="text" style="margin-top: 20px"><span class="accent">Tencent</span> is a massive enterprise commonly known as one of the three internet giants in China, the other two being Baidu and Alibaba. As suggested by this title, the company has more than 50 thousand employees and thus a very sophisticated hierarchy for management. </div>
        <div class="text" style="margin-top: 20px">Among the countless teams and departments, I worked at the web development team of <span class="accent">Licaitong</span>, an <span class="accent">asset management platform</span> accessible mostly through Wechat Pay. Licaitong exists as a department itself, and is subsequently affiliated to Tencent FiT (Financial Technology) department on a larger scale. The latter is a rather new department founded in 2015 with a vision of <span class="accent">pioneering online payment and financial services</span> both domestically and worldwide. </div>
        <div class="text" style="margin-top: 20px"><span class="accent">Online investment</span> as an emerging industry in China has seen a revolutionary boom in the past few years. Tencent and Alibaba, 2 of the 3 internet giants in China, are competing fiercely against each other for the bigger share in this field. With this in sight, Licaitong has received enormous attention within the company and has gradually developed into an independent department composing several teams. Apart from the web development team where I belonged, there are also back-end development team, UI/UX design team, product managing team etc., all serving this same product.</div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><clipboard-icon size="16" class="icon" /></div>
            <div>project overview</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">"Middle-end" Development</div>
        <div class="text">The idea of our system actually applied the concept of “middle-end” development. “Middle-end”, first proposed by Alibaba, is a set of principles for software development, business management and enterprise structure. The key idea to it is to <span class="accent">minimize communication costs</span> and thus <span class="accent">improve efficiency</span> of the cooperation across people, teams and departments by the means of standardization. <span class="accent">Management will be centralized, and execution distributed.</span> Our system is “middle-ended” in the sense that it serves as a centralized management platform. Users can create contents (articles, advertisements etc.), launch them onto different platforms such as H5, web page and mobile app and manage these contents through our system.</div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><bookmark-icon size="16" class="icon" /></div>
            <div>scope of work</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">My Responsibilities</div>
        <div class="text">My main task was to finish <span class="accent">60%</span> of the system, including the <span class="accent">implementation of 8 pages</span> and the <span class="accent">migration of 2 other pages</span>. To finish these tasks, I collaborated with 3 people from my team, several others from the UI/UX design team and a few from the back-end development team. Generally speaking, I have to follow the illustrations provided by the UI/UX design team and realize the functions in codes accordingly. </div>
        <div class="explain" v-show="showClass">Class Diagram:</div>
        <div style="text-align: center; margin: 5% 0;"><img src="../../assets/projects/ten/1.png" style="width:80%;" :onload="classLoad()" /></div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><layers-icon size="16" class="icon" /></div>
            <div>technical & managerial details</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">Implementing the App</div>
        <div class="text">We used <span class="accent">webpack</span> as the module bundler, <span class="accent">TypeScript + Egg.js</span> as the application framework and <span class="accent">Vue.js</span> as the progressive framework to develop the web system. With these technologies, we eliminate the need to compile the client-side and the server-side separately. Instead, during our development, the client-side and the server-side are to some extent <span class="accent">united in one project</span>. We could run both the client-side web pages and the server by one single npm command in replacement of the traditional way where one must use 2 npm commands to run the respective side of the system. This effectively <span class="accent">reduced the time wasted</span> on running 2 commands separately and thus saved our time. </div>
        <div class="text" style="margin-top: 20px">For the more general design pattern, we applied the <span class="accent">MVC architecture</span>. We used <span class="accent">TypeORM</span> to implement models and manipulate data. It has undoubtedly reduced the amount of code in our project and made the code more readable and therefore <span class="accent">increased the maintainability</span> of the project. In addition, we applied <span class="accent">TypeScript</span> as the primary scripting language to develop our web application which also contributes to the readability and maintainability of the code. </div>
        <div class="text" style="margin-top: 20px">Although our team did not observe Scrum or Agile Development, a rather sophisticated time schedule, similar to a <span class="accent">sprint backlog</span>, was designed by the project leader, in this case being my mentor. During the development, I generally followed that schedule, but sometimes, I also got ahead of the schedule, and I used the extra time to re-test and refine my program. </div>

        <div class="explain" v-show="showFlow">Part of the Flow Chart:</div>
        <div style="text-align: center; margin: 5% 0;"><img src="../../assets/projects/ten/2.png" style="width:80%" :onload="flowLoad()"/></div>
    </div>

    <div class="section">
        <div class="section_hint">
            <div style="margin-right: 6px">-</div>
            <div style="padding-top:2px"><archive-icon size="16" class="icon" /></div>
            <div>outcome</div>
            <div style="margin-left: 6px">-</div>
        </div>
        <div class="heading">My Achievements</div>
        <div class="text">In the end, I finished my tasks <span class="accent">two weeks ahead of schedule</span>. I implemented the pages where the user creates a new "content", manages the "contents" they have created, and uploads materials that could be used in a "content". For each page, several different vue components and server-side data-fetching APIs were implemented. The output of my implementation was <span class="accent">tested several times</span> by myself and by my colleagues to ensure that it fulfills the requirements of the users and is bug-free. I am confident to say that I have ended up being rather familiar with web development, not only the techniques but also the business culture. </div>
    </div>

    <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
  </div>
</template>

<script>
import { ChevronLeftIcon, LayersIcon, BookOpenIcon, HomeIcon, ClipboardIcon, BookmarkIcon, ArchiveIcon } from 'vue-feather-icons'

export default {
    name: 'Micro',
    components: {
        ChevronLeftIcon,
        LayersIcon,
        BookOpenIcon,
        HomeIcon,
        ClipboardIcon,
        BookmarkIcon,
        ArchiveIcon
    },
    data() {
        return {
            showClass: false,
            showFlow: false,
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
        classLoad() {
            this.showClass = true;
        },
        flowLoad() {
            this.showFlow = true;
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
    background: #5FCA9C;
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
  color: #5FCA9C;
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
.explain {
    text-align: center;
    color: #909090;
    margin-top: 30px;
}
</style>