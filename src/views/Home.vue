<template>
  <v-row>
    <v-col v-for="(pokemon,index) in pokemones" cols="3" :key="'col'+index">
      <PokemonCard
        :id="pokemon.url.split('/')[pokemon.url.split('/').length-2]"
        :nombre="pokemon.name"
        :foto="link+pokemon.url.split('/')[pokemon.url.split('/').length-2]+'.png'"
        :key="'pokemon'+index"
      />
    </v-col>
    <v-pagination
      color="red darken-4"
      toggle
      circle
      v-model="pagina"
      :length="Math.ceil(total/28)"
      :total-visible="10"
    ></v-pagination>
  </v-row>
</template>

<script>
// @ is an alias to /src
import PokemonCard from "@/components/PokemonCard.vue";
import Navigation from "@/services/Navigation.js";

export default {
  name: "Home",
  components: {
    PokemonCard
  },
  data: () => ({
    link:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    pokemones: [],
    total: 0,
    pagina: 1
  }),
  created() {
    Navigation.getPokemones().then(response => {
      this.pokemones = response.data.results;
      this.total = response.data.count;
    });
  },
  watch: {
    pagina() {
      Navigation.getPokemones(this.pagina).then(response => {
        this.pokemones = response.data.results;
        this.total = response.data.count;
      });
    }
  }
};
</script>
