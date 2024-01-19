<template>
    <div class="emoji-list">
      <nav class="emoji-nav">
        <span v-for="(emojiTable,index) in table" :key="index" 
          :class="selected === index ? 'selected' : ''"
          @click="selected=index">
          {{ emojiTable[0] }}
        </span>
      </nav>
      <ol>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
        <li>&#129409</li>            
      </ol>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { emojiList } from './emojiList';


const selected = ref(0)
const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
    ] 

</script>

<style lang="less" scoped>
    .emoji-list{         
          display: flex;
          flex-direction: column;
          padding: 10px 12px 0 12px;
          border: 1px solid @tag-create-emoji-list-border-color;
          border-radius: 8px;
          
          .emoji-nav{
            display: flex;
            color: @tag-create-text-color-normal;
            overflow: auto;
            
            span{
                margin-right: 16px;
                line-height: 16px;
                text-wrap: nowrap; 
            }
            .selected{
                  color: @tag-create-text-color;
                }
          }
          .emoji-nav::-webkit-scrollbar{
              display: none;
            }
            ol{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              font-size: 22px;
              line-height: 32px;
              height: calc(32px*12);
              margin-top: 10px;
              overflow: auto;
              li{
                width: 10%;
                flex-grow: 0;
                flex-shrink: 0;
                align-items: center;
              }
            }

            ol::-webkit-scrollbar{
              display: none;
            }
        }
</style>
