<template>
  <q-card>
    <q-card-section>
      <h3 class="text-center">Checkout</h3>
    </q-card-section>

    <q-stepper ref="stepper" v-model="step" color="primary" animated>
      <q-step :name="1" title="Review Purchase" icon="receipt" :done="step > 1">
        <shoppingList>
          <q-item>
            <q-item-section>Total: </q-item-section>
            <q-item-section></q-item-section>
            <q-item-section>{{ cart.total }}</q-item-section>
            <q-item-section>
              <q-btn
                label="Proceed"
                color="positive"
                icon-right="navigate_next"
                @click="nextStep"
              />
            </q-item-section>
          </q-item>
        </shoppingList>
      </q-step>
      <q-step :name="2" title="Enter Information" icon="list" :done="step > 2">
        <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
          <q-input v-model="name" filled label="Your name" hint="Name and surname" />
          <q-input v-model="age" filled type="date" label="Your Birthday" hint="Try to pick a date this century" />
          <q-input v-model="address" filled label="Your address" hint="The place where you live, dumbass" />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-step>
      <q-step :name="3" title="Checkout" icon="paid" :done="step > 3">
        <h5 class="text-center">Pay Using: </h5>
        <q-card style="max-width: 300px" class="q-ml-auto q-mr-auto bg-grey-9 q-mb-lg">
          <q-tooltip anchor="top middle" self="bottom middle" class="text-caption">
            This provider is currently unavailable. We appologize for the inconvenience.
          </q-tooltip>
          <q-card-section horizontal>
            <q-card-section><q-icon name="img:/icons/paypal.svg" /></q-card-section>
            <q-card-section>Paypal</q-card-section>
          </q-card-section>
        </q-card>
        <q-card v-ripple style="max-width: 300px; cursor: pointer;" class="q-ml-auto q-mr-auto" @click="roll()">
          <q-card-section horizontal>
            <q-card-section><q-icon name="img:/icons/youtube.svg" /></q-card-section>
            <q-card-section>Youtube</q-card-section>
          </q-card-section>
        </q-card>
      </q-step>
      <q-step :name="4" title="Confirm" icon="check_circle" :done="false">
      </q-step>
    </q-stepper>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import shoppingList from "src/components/shoppingList.vue";
import { Cart } from "src/store";
import { QStepper, useQuasar } from "quasar";
import RickRoll from "src/components/rickroll.vue";

export default defineComponent({
  components: { shoppingList },
  setup() {
    const step = ref(1);
    const stepper = ref(null as QStepper | null);
    const cart = inject<Cart>("cart");
    if (!cart) {
      throw Error("No cart!");
    }

    const $q = useQuasar()
    const name = ref(null)
    const address = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      address,
      age,
      accept,
      onReset() {
        name.value = null;
        address.value = null;
        age.value = null;
        accept.value = false;
      },
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first"
          })
        } else {
          stepper.value?.next()
        }
      },
      step,
      stepper,
      cart,
      nextStep() {
        stepper.value?.next();
      },
      roll() {
        $q.dialog({
          component: RickRoll,
          title: "Youtube Authentication"
        })
      }
    };
  },
});
</script>
