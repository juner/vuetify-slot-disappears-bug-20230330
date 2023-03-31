<template>
  <v-text-field v-bind="$attrs">
    <template v-for="(_, name) of $slots" #[name]="attrs">
      <slot :name="name" v-bind="attrs" />
    </template>
  </v-text-field>
</template>