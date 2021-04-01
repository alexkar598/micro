<template>
    <q-card bordered>
      <q-card-section class="text-center">
        <q-icon id="logo" name="img:/icons/coin.png" size="20em"  />
        <h4 class="text-center">Welcome to the Yogstation microtransaction store!</h4>
        <h5>Select a category below to proceed</h5>
      </q-card-section>
    </q-card>
    <div class="row content-start justify-center q-mt-xl">
      <q-btn v-for="category in categories" :key="category.name" :color="text2color(category.name)" :icon="category.icon" :label="category.name" :to="{ name: 'itemshop', params: { category: category.id } }" no-wrap class="q-mx-md" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categories } from "src/store";
import { text2color } from "src/misc";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      categories: Object.values(categories),
      text2color
    }
  }
});
</script>

<style scoped>
#logo {
  border-radius: 50%;
}
</style>
