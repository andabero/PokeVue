<template>
  <v-card shaped raised class="mx-auto my-1" width="100%" color="grey lighten-3">
    <v-card-title class="text-center text-uppercase font-italic font-weight-bold">{{nombre}}</v-card-title>

    <v-img class="black--text align-end" height="250px" :src="foto" @click="explorar(id)"></v-img>

    <v-card-actions>
      <v-btn rounded block outlined color="red darken-4" @click="explorar(id)">Ver mas</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    foto: { type: String, required: true }
  },
  methods: {
    explorar(id) {
      this.$router.push("/pokemon/" + id);
    }
  }
};
</script>
