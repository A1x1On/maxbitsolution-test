<template>
  <div class="container">
    <header class="container__header"></header>
    <section class="container__section">
      <slot />
    </section>
    <footer class="container__footer"></footer>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  components: {},
  setup() {},
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-width: 1024px;
  min-width: 360px;
  margin: auto;

  @media screen and (max-width: 400px) {
    padding: 0px 10px;
  }

  &__header {
    height: 20px;
  }

  &__section {
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 10px - 10px);
    background-color: var(--bg-color);
    padding: 20px;
    box-shadow: var(--shadow-color) 0px 3px 10px -5px;
    border-radius: var(--border-radius);

    @media screen and (max-width: 400px) {
      padding: 10px;
    }
  }

  &__footer {
    height: 20px;
    margin: 0px;
  }
}
</style>
