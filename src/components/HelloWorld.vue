<template>
  <div>
    <span v-bind:title="msg" v-on:click="reply">Hover</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    reply: function() {
      this.msg += " @ " + new Date().toUTCString();
    }
  }
};
</script>

<style lang="">
</style>
