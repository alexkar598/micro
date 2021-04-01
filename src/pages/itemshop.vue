<template>
  <q-card>
    <q-card-section>
      <h3 class="text-center">{{category.name}}</h3>
    </q-card-section>
    <q-card-section class="row items-start justify-evenly">
      <q-card v-for="item in category.items" :key="item.id" class="q-mb-md">
        <q-card-section style="width: 250px" >
          <span class="text-h6">{{item.name}}</span>
          <q-img :src="`/items/${category.id}/${item.icon_override || `${item.id}.png`}`" class="crisp"/>
          <span v-if="item.details" class="block text-grey-8 text-italic">{{ item.details }}</span>
        </q-card-section>
        <q-separator />
        <q-card-actions class="row">
          <span class="text-grey-8 text-body1 col">{{item.price}}$</span>
          <q-btn round :color="isInCart(item) ? 'warning' : 'primary'" :icon="isInCart(item) ? 'check' : 'add'" :disable="isInCart(item)" @click="() => addToCart(item)">
            <q-tooltip class="text-body2">
              Add to cart
            </q-tooltip>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from "vue"
import { useRoute } from "vue-router"
import { Cart, categories, Item } from "src/store"

export default defineComponent({
  setup() {
    const route = useRoute();

    let tmp = categories[route.params.category as string]
    if(!tmp) tmp = categories.items
    const category = ref(tmp);

    watch(() => route.params, newParams => {
      let tmp = categories[newParams.category as string]
      if(!tmp) tmp = categories.items
      category.value = categories[route.params.category as string]
    })


    const cart = inject<Cart>("cart");
    if(!cart) {
      throw Error("No cart!")
    }

    return {
      category,
      addToCart(item: Item) {
        cart.items.add(item)
      },
      isInCart(item: Item) {
        return cart.items.has(item)
      }
    }
  },
})
</script>

<style scoped>
.crisp {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
