<template>
    <div class="game" style="margin-top: 40px">
        <div class="bg" ref="bg">
            <div class="bg_container">
                <div class="text_container">
                    <div class="title">Go Princess</div>
                    <div class="overview">Go Princess is a pixel RPG game designed and developed in-class with Unity. In the game, the princess is locked in a castle by her father due to her refusal to an arranged marrige. Instead of waiting for a prince to rescue her, she decided to escape the castle on her own. On her way out, she needs to solve some puzzles and find the key. Meanwhile, she should always find enough food to maintain her Health Points.</div>
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
            <div class="heading">A Puzzle + Survival Game</div>
            <div class="text">A princess is locked in a castle by the king because she refused to marry the prince as demanded by her parents. She tries to escape the castle on her own as an independent woman instead of waiting for others to save her. </div>
            <div class="text" style="margin-top: 20px">There are <span class="accent">two main mechanism</span> of the game. First, the player needs to collect food in the scenes to <span class="accent">maintain the Health Points</span>. The HP will drop gradually with time. However, if the player collides with enemies, the HP will decrease drastically. Second, the player needs to <span class="accent">solve puzzles</span> to escape the castle. The NPCs will give the player some clues on finding the key. </div>
        </div>
        <div class="section">
            <div class="section_hint">
                <div style="margin-right: 6px">-</div>
                <div style="padding-top:2px"><youtube-icon size="16" class="icon" /></div>
                <div>demo</div>
                <div style="margin-left: 6px">-</div>
            </div>
            <div class="heading">Overall Game Flow</div>
            <iframe 
            :src="this.videoUrl" 
            frameborder='0'
            allow='autoplay;encrypted-media' 
            allowfullscreen 
            style='width:80%;height:500px;margin:20px 10%' />
            
        </div>
        
        <div style="text-align: right; margin: 10px 5%">©2020 Zhiying Ma</div>
    </div>
</template>

<script>
import { ChevronLeftIcon, BookOpenIcon, YoutubeIcon } from 'vue-feather-icons'

export default {
    name: 'Game',
    components: {
        ChevronLeftIcon,
        BookOpenIcon,
        YoutubeIcon
    },
    data() {
        return {
            videoUrl: 'https://www.youtube.com/embed/kgdDixfmbrU',
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
    background: #CB9D9D;
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
  color: #CB9D9D;
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
</style>