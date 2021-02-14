<template>
  <div class="about" ref="about">
    <!--<loading v-if="loading"></loading>-->
    <div class="head" ref="head" id="top">
      <div class="name">ZHIYING <span style="color: #3EBFCA">MA</span></div>
      <div class="head_sub"><span style="color: #3EBFCA">About</span> Me</div>
    </div>

    <div ref="sections" style="z-index:-2"></div>
    <div style="background-color:white">
      <div class="section_container" style="border-bottom: 1px solid #3EBFCA;">
        <div class="section" style="margin-right:5%">
          <div class="section_hint">
            <div style="padding-top:2px"><user-icon size="16" class="icon" /></div>
            <div>about me</div>
          </div>
          <div class="title">Who Am I?</div>
          <div>I am an undergraduate student in <b>Computer Science</b> at <b>The University of Hong Kong</b> with a minor in German. I am based in Shanghai and Hong Kong SAR. </div>
        </div>
        <div class="section" style="margin-right:5%">
          <div class="section_hint">
            <div style="padding-top:2px"><briefcase-icon size="16" class="icon" /></div>
            <span>work</span>
          </div>
          <div class="title">What do I do?</div>
          <div>Trained to be a programmer, I've worked at <b>Tencent</b> as a <b>front-end developer</b> intern, and at <b>Microsoft</b> as a <b>software engineer</b> intern in the past two summers. In addition, I also worked as a part-time <b>Android developer</b> in a research group at the University of Illinois at Urbana-Champaign. </div>
        </div>
        <div class="section">
          <div class="section_hint">
            <div style="padding-top:2px"><heart-icon size="16" class="icon" /></div>
            <span>passion</span>
          </div>
          <div class="title">What is my passion?</div>
          <div>In addition to my knowledge in Computer Science, I have a special interest in humanities and arts. I aim at incorporating <b>user-centric design thinking</b> and <b>visual arts</b> into app development so as to effectuate <b>a more convenient/immersive/inspiring digital experience</b>.</div>
        </div>
      </div>

      <div class="section_container" style="margin: 3% 5%" id="edu">
        <div class="second_section" style="margin-right: 5%; padding-bottom:5%">
          <div class="section_hint">
            <div style="padding-top:2px"><book-open-icon size="16" class="icon" /></div>
            <div>academics</div>
          </div>
          <div class="title">Education</div>
          <div class="edu">
            <div class="edu_title">Bachelor of Engineering in Computer Science</div>
            <div class="edu_content"><span style="color:black">The University of Hong Kong</span> | Sep 2016 - May 2021</div>
            <div class="edu_content"><span class="accent list">•</span> CGPA: <span class="accent">3.84</span>/4.30 | Rank: <span class="accent">5</span>/152 (up to the end of junior year)</div>
            <div class="edu_content"><span class="accent list">•</span> Young Tsun Dart Scholarship, 2018-2019</div>
            <div class="edu_content"><span class="accent list">•</span> Dean's Honours List, 2018-2019, 2017-2018, 2016-2017</div>
          </div>
          <div class="edu">
            <div class="edu_title">Exchange Program</div>
            <div class="edu_content"><span style="color:black">University of Illinois at Urbana-Champaign</span> | Aug 2019 - March 2020</div>
            <div class="edu_content"><span class="accent list">•</span> GPA: <span class="accent">4.0</span>/4.0</div>
          </div>
          <div class="edu">
            <div class="edu_title">International Honors Program Summer Session</div>
            <div class="edu_content"><span style="color:black">Stanford University</span> | Jun 2018 - Aug 2018</div>
            <div class="edu_content"><span class="accent list">•</span> GPA: <span class="accent">4.0</span>/4.3</div>
          </div>
          <div class="edu">
            <div class="edu_title">German Language Program</div>
            <div class="edu_content"><span style="color:black">Freiburg University</span> | Jul 2017 - Aug 2017</div>
            <div class="edu_content"><span class="accent list">•</span> Grade: <span class="accent">1.0</span> (equivalent to 4.0/4.0)</div>
          </div>
        </div>
        <div class="second_section">
          <div class="section_hint">
            <div style="padding-top:2px"><briefcase-icon size="16" class="icon" /></div>
            <span>work</span>
          </div>
          <div class="title">Experience</div>
          <div class="edu">
            <div class="edu_title">Microsoft <span style="font-weight: normal"> - Software Engineer Intern</span></div>
            <div class="edu_content">Remote & Suzhou, China | Jun 2020 - Aug 2020</div>
          </div>
          <div class="edu">
            <div class="edu_title">LittleBeats <span style="font-weight: normal"> - Part-Time Android Developer</span></div>
            <div class="edu_content">Remote & Champaign, IL | Dec 2019 - Mar 2020</div>
          </div>
          <div class="edu">
            <div class="edu_title">Tencent <span style="font-weight: normal"> - Front-End Developer Intern</span></div>
            <div class="edu_content">Shenzhen, China | Jun 2019 - Aug 2019</div>
            <!--<div class="edu_content"><span class="accent list">•</span> See More</div>-->
          </div>

          <div class="section_hint" style="margin-top: 7%">
            <div style="padding-top:2px"><box-icon size="16" class="icon" /></div>
              <span>specialities</span>
            </div>
            <div class="title">Skills & Interest</div>
              <div class="edu_content"><span class="accent list">•</span> Full-Stack Development</div>
              <div class="edu_content"><span class="accent list">•</span> UI Design</div>
              <div class="edu_content"><span class="accent list">•</span> Drawing & Painting</div>
              <div class="edu_content"><span class="accent list">•</span> Multilingual Studies: Chinese | English | Japanese | German</div>
        </div>
      </div>
      <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
    </div>
  </div>
</template>

<script>
import { UserIcon, BriefcaseIcon, BookOpenIcon, BoxIcon, HeartIcon } from 'vue-feather-icons'

export default {
  components: {
    UserIcon,
    BriefcaseIcon,
    BookOpenIcon,
    BoxIcon,
    HeartIcon
  },
  data() {
    return {
      clientHeight: "",
      loading: true,
      imgUrl: require('../assets/me.jpeg')
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

    if (this.$route.params.jump) {
      document.querySelector("#edu").scrollIntoView({
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
    changeFixed(clientHeight) {
      var temp = clientHeight - 80;
      var head_height = temp * 0.9;

      this.$refs.about.style.height = temp + 'px';
      this.$refs.head.style.height = head_height + 'px';
      this.$refs.sections.style.height = temp + 'px';
    }
  },
}
</script>

<style scoped>
.head {
  background: url('~@/assets/me.jpeg') center center no-repeat;
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
  margin-top: 20%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 100px;
  color: white;
}
.head_sub {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 60px;
  color: white;
}
.section_container {
  display: flex;
  flex-direction: row;
  margin: 0 5%;
}
.section {
  width: 30%;
  text-align: left;
  margin: 3% 0;
  padding: 10px 0;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 10px 0;
}
.section_hint {
  color: #909090;
  font-size: 13px;
  display: flex;
  align-items: flex-start;
}
.icon {
  width: 13px; 
  margin-right: 5px;
}
.edu_title {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 2px;
}
.edu_content {
  color: #909090;
  margin-bottom: 2px;
}
.accent {
  color: #3EBFCA;
  font-weight: bold;
}
.list {
  margin-right: 5px;
}
.second_section {
  text-align: left;
  width: 50%;
}
</style>