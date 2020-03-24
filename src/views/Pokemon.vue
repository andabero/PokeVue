<template>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card class="mx-auto my-1" width="100%" shaped raised color="grey lighten-2">
        <v-row>
          <v-col cols="5">
            <v-carousel height="350" hide-delimiter-background show-arrows-on-hover color="blue">
              <v-carousel-item
                v-for="(sprite,index) in Object.values(sprites)"
                :src="sprite"
                :key="'foto'+index"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="7">
            <v-card-title class="text-uppercase">{{nombre_mayusculas}}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <h3>Estatura</h3>
                  {{estatura/10}} Metros
                </v-col>
                <v-col cols="6">
                  <h3>Peso</h3>
                  {{peso/10}} Kilogramos
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <h3>Tipo</h3>
                  <ul>
                    <li v-for="(tipo,index) in tipos" :key="'tipos'+index">{{tipo}}</li>
                  </ul>
                </v-col>
                <v-col cols="6">
                  <h3>Habilidades</h3>
                  <ul>
                    <li
                      v-for="(habilidad,index) in habilidades"
                      :key="'habilidad'+index"
                    >{{habilidad}}</li>
                  </ul>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Navigation from "@/services/Navigation.js";

export default {
  props: ["id"],
  data: () => ({
    nombre: "",
    numero: 0,
    sprites: [],
    tipos: [],
    data: [],
    estatura: 0,
    peso: 0,
    categoria: "",
    habilidades: []
  }),
  computed: {
    nombre_mayusculas() {
      return this.nombre.replace(/(?:^|\s)\S/g, function(a) {
        return a;
      });
    }
  },
  created() {
    this.obtenerPokemon(this.id);
  },
  methods: {
    obtenerPokemon(id) {
      Navigation.getPokemon(id).then(response => {
        this.nombre = response.data.name;
        this.numero = response.data.id;
        this.sprites = [];
        for (var i in response.data.sprites) {
          if (response.data.sprites[i])
            this.sprites.push(response.data.sprites[i]);
        }
        this.sprites.reverse();
        this.tipos = [];
        for (let i = 0, len = response.data.types.length; i < len; i++) {
          this.tipos.push(response.data.types[i].type.name);
        }
        this.estatura = response.data.height;
        this.peso = response.data.weight;
        this.categoria = response.data.category;
        this.habilidades = [];
        for (let i = 0, len = response.data.types.length; i < len; i++) {
          this.habilidades.push(response.data.abilities[i].ability.name);
        }
      });
    }
  }
};
</script>
