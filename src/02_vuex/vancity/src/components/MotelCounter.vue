<template>
    <h3>We visited {{ motelsCount }} {{ motelsCount === 1 ? "motel" : "motels" }}.</h3>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["motelsCount"])
};
</script>
