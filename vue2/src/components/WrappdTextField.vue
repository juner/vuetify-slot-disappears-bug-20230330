<template>
  <v-text-field v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots['append-outer']" #append-outer>
      <slot name="append-outer" />
    </template>
      <template v-if="$scopedSlots.counter" #counter="tattrs">
    <slot name="counter" v-bind="tattrs" />
    </template>
    <template v-if="$slots.label" #label>
      <slot name="label" />
    </template>
    <template v-if="$scopedSlots.message" #mssage="tattrs">
      <slot name="message" v-bind="tattrs" />
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots['prepend-inner']" #prepend-inner>
      <slot name="prepend-inner" />
    </template>
    <template v-if="$slots.progress" #progress>
      <slot name="progress" />
    </template>
  </v-text-field>
</template>