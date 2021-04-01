<template>
  <q-list>
    <div v-if="cart.items.size">
      <div v-for="item of cart.items" :key="item.id">
        <q-item>
          <q-item-section avatar class="bigico"><q-icon :name="`img:/items/${item.category}/${item.icon_override || `${item.id}.png`}`"/></q-item-section>
          <q-item-section>{{item.name}}</q-item-section>
          <q-item-section class="text-grey-8">{{item.price}}$</q-item-section>
          <q-item-section side>
            <q-btn flat text-color="red" icon="delete" class="q-px-sm inline" @click="() => cart.items.delete(item)"/>
          </q-item-section>
        </q-item>
        <q-separator />
      </div>

      <slot></slot>
    </div>
    <div v-else>
      <q-item>
        <q-item-section class="text-grey-8">Your cart is empty! Add something!</q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script lang="ts">
import { Cart } from "src/store"
import { defineComponent, inject } from "vue"

export default defineComponent({
  setup() {
    const cart = inject<Cart>("cart");
    if(!cart) {
      throw Error("No cart!");
    }

    return {
      cart
    }
  },
})
</script>
