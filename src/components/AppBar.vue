<template>
  <v-app-bar shaped color="grey darken-4" dense dark height="65px" max-height="65px">
    <router-link :to="{ name: 'Home' }">
      <img id="logo" src="@/assets/logo.png" alt />
    </router-link>

    <v-toolbar-title>POKEDEX</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        v-mask="mask"
        shaped
        dense
        label="Buscar pokemon por número"
        outlined
        hide-details
        append-icon="search"
        v-model="busqueda"
        type="number"
        min="1"
        @keyup.enter="validar()"
      ></v-text-field>
    </v-col>
  </v-app-bar>
</template>

<script>
import Navigation from "@/services/Navigation";
export default {
  data() {
    return {
      busqueda: null
    };
  },
  methods: {
    validar: function() {
      if (this.busqueda != "") {
        this.search();
      }
    },
    search() {
      Navigation;
      Navigation.getPokemon(this.busqueda).then(response => {
        this.$router.push("/pokemon/" + response.data.id);
      });
      this.busqueda = "";
    }
  }
};
</script>

<style scoped>
#logo {
  width: 70px;
  height: 70px;
  margin-top: 5px;
}
</style>
