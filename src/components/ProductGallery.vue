<template>
  <div>
    <div class="wrapper large">
      <h3>You may also like</h3>
      <div class="boxes flex-center">
        <div class="box">
          <div class="box-img"></div>
          <div class="box-txt">
            <h4>XX99 MARK I</h4>
            <button class="btn-1"><p class="btn-1-p">see product</p></button>
          </div>
        </div>

        <div class="box">
          <div class="box-img"></div>
          <div class="box-txt">
            <h4>XX99 MARK I</h4>
            <button class="btn-1"><p class="btn-1-p">see product</p></button>
          </div>
        </div>

        <div class="box">
          <div class="box-img"></div>
          <div class="box-txt">
            <h4>XX99 MARK I</h4>
            <button class="btn-1"><p class="btn-1-p">see product</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
};
</script>

<style scoped>
.wrapper {
  border: 5px solid red;
  min-height: 20rem;
}
.boxes {
  gap: 1rem;
}
.box {
  width: 21.875rem;
  background-color: lightgreen;
}
</style>
