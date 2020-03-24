<template>
  <v-app>
    <AppBar></AppBar>
    <v-content>
      <v-container>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: "App",

  components: {
    AppBar
  },
  data: () => ({
    //
  })
};
</script>
