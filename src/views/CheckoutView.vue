<template>
  <div>
    <div class="container">
      <router-link to="/" class="back-link">Go Back</router-link>
      <section class="large flex">
        <form class="checkout">
          <h1>checkout</h1>
          <div class="billing">
            <h3>billing details</h3>
            <div class="flex-form-group flex">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Alexei Ward" />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="alexei@mail.com" />
              </div>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="+1202-555-0136" />
            </div>
          </div>
          <div class="shipping">
            <h3>shipping info</h3>
            <div class="form-group">
              <label for="address">address</label>
              <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" />
            </div>
            <div class="flex-form-group flex">
              <div class="form-group">
                <label for="zip">Zip code</label>
                <input type="text" name="zip" id="zip" placeholder="10001" />
              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" name="city" id="city" placeholder="New York" />
              </div>
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" name="country" id="country" placeholder="United States" />
            </div>
          </div>
          <div class="payment">
            <h3>payment details</h3>
            <div class="payment-method">
              <h4>Payment Method</h4>
              <div class="methods flex"></div>
              <div class="e-money flex">
                <div class="form-group">
                  <label for="e-money-number">e-Money Number</label>
                  <input type="text" name="e-money-number" id="e-money-number" placeholder="238521993" />
                </div>
                <div class="form-group">
                  <label for="e-money-pin">e-Money-PIN</label>
                  <input type="text" name="ce-money-pin" id="e-money-pin" placeholder="6891" />
                </div>
              </div>
              <div class="payment-txt flex-align">
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                  Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
            </div>
          </div>
        </form>
        <div class="summary">
          <h2>summary</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutView',
};
</script>

<style scoped>
.container {
  background-color: var(--clr-grey);
  min-height: 100dvh;
  margin-top: 4.2rem;
}
.back-link {
  max-width: 1440px;
  margin: auto;
  padding-top: 2rem;
}
section {
  padding: 3rem 0;
  align-content: flex-start;
  gap: 1rem;
}
.checkout,
.summary {
  background-color: var(--clr-white);
  border-radius: 10px;
}
.checkout {
  padding: 3rem 2rem;
  min-height: 70.375rem;
  max-width: 45.625rem;
}
.summary {
  padding: 2rem 1.5rem;
  min-height: 38.25rem;
  max-width: 21.875rem;
}
h1 {
  font-size: var(--h3-size);
  letter-spacing: 1.14px;
}
h2 {
  font-size: var(--h6-size);
  text-transform: uppercase;
}
h3 {
  font-size: var(--sub-size);
  color: var(--clr-peach);
  font-weight: bold;
}
/* --- FORM STYLE --- */
input {
  border: 2px solid var(--clr-grey);
  border-radius: 7px;
  padding: 1.1rem 1rem;
  display: block;
  font-size: var(--overline-size);
  color: var(--clr-black);
  font-weight: bold;
  width: 19.313rem;
}
input::placeholder {
  font-size: var(--overline-size);
  color: var(--clr-border);
  font-weight: bold;
}
#address {
  width: 100%;
}
.input-err {
  border: 2px solid var(--clr-red);
}
label {
  font-size: var(--label-size);
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: inline-block;
}
.flex-form-group {
  gap: 2rem;
}
.form-group {
  margin: 1rem 0;
}
.payment-txt {
  gap: 1.5rem;
}
.payment-txt p {
  color: var(--clr-border);
  max-width: 34.625rem;
}
</style>
