<template>
  <div class="not-found-page">
    <h1 class="not-found-page__code">404</h1>
    <h3 class="not-found-page__not-found">PAGE NOT FOUND</h3>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.not-found-page {
  margin: auto;
  max-width: 1024px;
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100%;

  &__code {
    font-size: 80px;
    padding-right: 30px;
  }

  &__not-found {
    font-size: 30px;
    color: bisque;
  }
}
</style>
