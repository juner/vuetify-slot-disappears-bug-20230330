<script setup lang="ts">
import { reactive, ref } from 'vue';

const data = (() => {
  const value = ref("hello");
  const icon = ref("♪");
  return reactive({
    value,
    icon,
  });
})();
function hello(){
  alert("hello");
}
function clear(){
  Object.assign(data,{value:"cleared."});
}
</script>

<template>
  <v-app>
    <v-main>
      <v-text-field outlined v-model="data.value">
        <template #append>
          <v-btn @click="hello" icon color="primary">
            {{ data.icon }}
          </v-btn>
        </template>
      </v-text-field><br/>
      <v-btn @click="clear" color="primary">clear</v-btn>
    </v-main>
  </v-app>
</template>

<style scoped>
/** no use */
</style>
