<script setup lang="ts">
import { reactive, ref, type UnwrapRef, nextTick } from 'vue';
import WrappdTextField from './components/WrappdTextField.vue';
const data = (() => {
  const value = ref("hello");
  const icon = ref("♪");
  return reactive({
    value,
    noSetValue,
    icon,
  });
  async function noSetValue(v: UnwrapRef<typeof value>) {
    const old = value.value;
    value.value = v;
    await nextTick();
    value.value = old;
  }
})();
function hello1(){
  alert("hello1");
}
function hello2(){
  alert("hello2");
}
function clear(){
  Object.assign(data,{value:"cleared."});
}
</script>

<template>
  <v-app>
    <v-main>
      <wrappd-text-field 
        outlined 
        :value="data.value" 
        @change="data.noSetValue"
        :style="{flex: `0 0 250px`}">
        :style="{flex: `0 0 250px`}">
        <template #append>
          <v-btn @click="hello1" icon color="primary">
            {{ data.icon }}
          </v-btn>
        </template>
        <template #append-outer>
          <v-btn @click="hello2" icon color="primary">
            {{ data.icon }}
          </v-btn>
        </template>
      </wrappd-text-field><br/>
      <v-btn @click="clear" color="primary">clear</v-btn>
    </v-main>
  </v-app>
</template>

<style scoped>
/** no use */
</style>
