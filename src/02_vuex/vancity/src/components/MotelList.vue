<template>
  <div>
    <h1>Motels</h1>
    <ul>
      <li v-for="(motel, index) in motels" :key="index">
        <span>{{ motel.name }}</span> (<span v-for="n in Math.round(motel.rating)" :key="n">*</span>)
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["motels"])
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
