<template>
  <div>
    <section>
      <div class="title flex-center large">
        <h1 id="prod-title">{{ ProductName }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['ProductName'],
};
</script>

<style scoped>
section {
  background-color: var(--clr-black);
  padding: 6rem 0;
}
#prod-title {
  font-size: var(--h2-size);
  letter-spacing: 1.43px;
  font-weight: 800;
  color: var(--clr-white);
}
</style>
