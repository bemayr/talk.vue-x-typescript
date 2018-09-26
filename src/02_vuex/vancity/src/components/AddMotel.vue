<template>
  <div>
    <input type="text" v-model="name" placeholder="Name">
    <input type="number" v-model.number="rating" placeholder="Rating">
    <button @click="add" type="submit">Add</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Actions } from "@/store";

export default {
  data: () => ({
    name: "",
    rating: 0
  }),
  computed: mapGetters(["motels"]),
  methods: {
    // different variant where the Action's name can be refactored
    // ...mapActions([Actions.addMotel]),
    ...mapActions(["addMotel"]),
    add: function() {
      // different variant where the Action's name can be refactored
      // this[Actions.addMotel]({ name: this.name, rating: this.rating });
      this.addMotel({ name: this.name, rating: this.rating });

      // No Type Error :o
      // this.addMotel({ name: this.name });
    }
  }
};
</script>
