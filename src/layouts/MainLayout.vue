<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn unelevated round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/coin.gif">
          </q-avatar>
          Yogstation Store
        </q-toolbar-title>

        <div>Powered by {{ poweredBy }}</div>
        <q-btn unelevated round icon="shopping_cart" @click="toggleRightDrawer" />
        <q-btn unelevated round :icon="isDark ? 'dark_mode' : 'light_mode'" @click="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-drawer model-value side="left" bordered :mini="!leftDrawerOpen" behavior="desktop">
      <q-list>
        <q-item to="/" exact active-class="bg-blue-3" @click="closeLeftDrawer">
          <q-item-section avatar>
            <q-tooltip v-if="!leftDrawerOpen"  class="text-body2" anchor="center right" self="center left">
              Home
            </q-tooltip>
            <q-avatar icon="home" color="primary" text-color="white"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-separator />
        <q-item v-for="category in categories" :key="category.name" :to="{ name: 'itemshop', params: { category: category.id } }" active-class="bg-blue-3"  exact @click="closeLeftDrawer">
          <q-item-section avatar>
            <q-tooltip v-if="!leftDrawerOpen"  class="text-body2" anchor="center right" self="center left">
              {{category.name}}
            </q-tooltip>
            <q-avatar :icon="category.icon" :color="text2color(category.name)" text-color="white"/>
          </q-item-section>
          <q-item-section>{{ category.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-img src="https://cdn.quasar.dev/img/material.png">
        <div class="absolute-bottom text-center">
          <span class="text-h5">Shopping Cart</span>
        </div>
      </q-img>

      <shopping-list>
        <q-item>
          <q-item-section>Total: </q-item-section>
          <q-item-section></q-item-section>
          <q-item-section>{{cart.total}}</q-item-section>
          <q-item-section>
            <div>
              <q-btn :to="{name: 'checkout'}" color="warning" icon="navigate_next" round>
                <q-tooltip class="text-body2">
                  Checkout
                </q-tooltip>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </shopping-list>

    </q-drawer>
    <q-btn round color="primary" icon="shopping_cart" />

    <q-page-container id="container">
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch, reactive, provide } from "vue"
import { Cart, Item } from "src/store"
import { useQuasar } from "quasar";
import { categories } from "src/store";
import { text2color } from "src/misc"
import shoppingList from "src/components/shoppingList.vue";

export default defineComponent({
  components: {shoppingList},
  setup () {
    const rightDrawerOpen = ref(true)
    const leftDrawerOpen = ref(false)

    const poweredBy = ref("");
    onMounted(() => {
      const possibilities = ["evil", "EA Games", "tears", "catboys", "coder socks", "nothing", "code", "mistakes"];
      const idx = Math.floor(Math.random() * possibilities.length);
      poweredBy.value = possibilities[idx];
    })

    const $q = useQuasar()
    const isDark = ref($q.dark.isActive)
    watch(() => $q.dark.isActive, newVal => isDark.value = newVal)

    const cart = reactive({
      items: reactive(new Set<Item>()),
      get total() {
        let total = 0;
        this.items.forEach(item => total += item.price);
        return (Math.round((total + Number.EPSILON) * 100) / 100).toString() + "$";
      }
    } as Cart)

    provide("cart", cart);

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      closeLeftDrawer () {
        leftDrawerOpen.value = false
      },
      poweredBy,
      toggleDarkMode () {
        $q.dark.toggle()
      },
      isDark,
      categories: Object.values(categories),
      text2color,
      cart
    }
  }
})
</script>


<style scoped>
#container {
  background-image: url("/bg.png");
  height: 100%;
}

.bigico .q-icon {
  height: 1.5em;
  width: 1.5em;
}
</style>
