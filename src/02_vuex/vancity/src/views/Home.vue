<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <motel-list/>
    <add-motel/>
    <motel-counter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddMotel from "@/components/AddMotel.vue"; // @ is an alias to /src
import MotelCounter from "@/components/MotelCounter.vue"; // @ is an alias to /src
import MotelList from "@/components/MotelList.vue"; // @ is an alias to /src

export default {
  components: { AddMotel, MotelCounter, MotelList }
};
</script>
