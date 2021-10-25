<template>
  <q-dialog ref="dialogRef" persistent maximized @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="margin: 75px" >
      <q-card-section style="height: 100%;">
        <div style="pointer-events: none; height: 100%;">
        <iframe id="ytplayer" type="text/html" width="100%" height="100%"
src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&start=0&mute=1"
frameborder="0" />
        <iframe id="ytplayer" type="text/html" width="100%" height="100%" style="display: none;"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&start=0"
        frameborder="0" />
        </div>
      </q-card-section>
      <q-inner-loading :showing="loading" class="bg-white">
        <q-spinner color="primary" size="50%" />
      </q-inner-loading>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import { useDialogPluginComponent } from "quasar"

export default defineComponent({
  emits: [
    ...useDialogPluginComponent.emits
  ],
  setup() {
    const { dialogRef, onDialogHide } = useDialogPluginComponent()

    const loading = ref(true);

    onMounted(() => {
      window.setTimeout(() => loading.value = false, 1500)
    })

    return {
      loading,
      dialogRef,
      onDialogHide,
    }
  },
})
</script>


