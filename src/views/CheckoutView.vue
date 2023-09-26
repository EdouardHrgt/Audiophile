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
                <label for="name"
                  >Name
                  <p class="err err-name" v-if="errMsg == 'name'">Wrong format</p></label
                >

                <input type="text" name="name" id="name" placeholder="Alexei Ward" v-model="myForm.name" />
              </div>
              <div class="form-group">
                <label for="email"
                  >Email Address
                  <p class="err err-email" v-if="errMsg == 'email'">Wrong format</p></label
                >
                <input type="email" name="email" id="email" placeholder="alexei@mail.com" v-model="myForm.email" />
              </div>
            </div>
            <div class="form-group">
              <label for="phone"
                >Phone Number
                <p class="err err-phone" v-if="errMsg == 'phone'">Wrong format</p></label
              >
              <input type="tel" name="phone" id="phone" placeholder="+1202-555-0136" v-model="myForm.phone" />
            </div>
          </div>
          <div class="shipping">
            <h3>shipping info</h3>
            <div class="form-group">
              <label for="address"
                >address
                <p class="err err-address" v-if="errMsg == 'address'">Wrong format</p></label
              >
              <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" v-model="myForm.address" />
            </div>
            <div class="flex-form-group flex">
              <div class="form-group">
                <label for="zip"
                  >Zip code
                  <p class="err err-zip" v-if="errMsg == 'zip'">Wrong format</p></label
                >
                <input type="text" name="zip" id="zip" placeholder="10001" v-model="myForm.zipCode" />
              </div>
              <div class="form-group">
                <label for="city"
                  >City
                  <p class="err err-city" v-if="errMsg == 'city'">Wrong format</p></label
                >
                <input type="text" name="city" id="city" placeholder="New York" v-model="myForm.city" />
              </div>
            </div>
            <div class="form-group">
              <label for="country"
                >Country
                <p class="err err-country" v-if="errMsg == 'country'">Wrong format</p></label
              >
              <input type="text" name="country" id="country" placeholder="United States" v-model="myForm.country" />
            </div>
          </div>
          <div class="payment">
            <h3>payment details</h3>
            <div class="payment-method">
              <div class="payment-flex flex">
                <h5>Payment method</h5>
                <div class="methods">
                  <div class="form-group radio">
                    <input type="radio" name="payment" id="e-money" value="e-money" v-model="myForm.payment" />
                    <label for="e-money">e-Money</label>
                  </div>
                  <div class="form-group radio">
                    <input type="radio" name="payment" id="cash" value="cash" v-model="myForm.payment" />
                    <label for="cash">Cash On Delivery</label>
                  </div>
                </div>
              </div>

              <div class="e-money flex">
                <div class="form-group">
                  <label for="e-money-number"
                    >e-Money Number
                    <p class="err err-number" v-if="errMsg == 'number'">Wrong format</p></label
                  >
                  <input
                    type="text"
                    name="e-money-number"
                    id="e-money-number"
                    placeholder="238521993"
                    v-model="myForm.eMoneyNb"
                  />
                </div>
                <div class="form-group">
                  <label for="e-money-pin"
                    >e-Money-PIN
                    <p class="err err-pin" v-if="errMsg == 'pin'">Wrong format</p></label
                  >
                  <input type="text" name="ce-money-pin" id="e-money-pin" placeholder="6891" v-model="myForm.eMoneyPin" />
                </div>
              </div>
              <!-- <div class="payment-txt flex-align">
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                  Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div> -->
            </div>
          </div>
        </form>
        <div class="summary">
          <h2>summary</h2>
          <ul>
            <li class="flex" v-for="item in myCart" :key="item.name">
              <div class="prod-img">
                <img :src="require('../assets/' + item.thumbnail)" :alt="'Picture of the ' + item.name" />
              </div>
              <div class="prod-desc">
                <p class="prod-desc-name">
                  <strong>{{ item.name }}</strong> <span>x{{ item.quantity }}</span>
                </p>
                <p class="price">$ {{ item.totalPrice }}</p>
              </div>
            </li>
          </ul>
          <div class="summary-numbers">
            <h6>
              total <span>$ {{ CalcTotal }}</span>
            </h6>
            <h6>shipping <span>$ 50</span></h6>
            <h6>
              vat (included) <span>$ {{ CalcVat }}</span>
            </h6>
            <h6 class="grand-total">
              grand total <span>$ {{ CalcTotalVat + 50 }}</span>
            </h6>
          </div>
          <button class="btn-1 pay-btn"><p class="btn-1-p" @click="ordering()">continue & pay</p></button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutView',
  mounted() {
    this.myCart = this.$store.state.cart.items;
    if (!this.myCart.length) {
      this.$router.push('/');
    }
  },
  computed: {
    CalcTotal() {
      return this.$store.getters.getTotalPrice;
    },
    CalcTotalVat() {
      const total = this.$store.getters.getTotalPrice * 1.2;
      return parseFloat(total.toFixed(2));
    },
    CalcVat() {
      const vat = this.CalcTotalVat - this.CalcTotal;
      return vat.toFixed(0);
    },
  },
  methods: {
    ordering() {
      alert('...command done');
    },
  },
  data() {
    return {
      myCart: [],
      myForm: {
        name: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        payment: 'e-money',
        eMoneyNb: '',
        eMoneyPin: '',
      },
    };
  },
};
</script>

<style scoped>
.container {
  background-color: var(--clr-grey);
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
  gap: 3rem;
  justify-content: center;
}
.checkout,
.summary {
  background-color: var(--clr-white);
  border-radius: 10px;
}
.checkout {
  padding: 3rem 2rem;
  max-width: 45.625rem;
}
.summary {
  padding: 2rem;
  width: 22rem;
  height: fit-content;
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
.label-err {
  color: var(--clr-red);
}
label,
h5 {
  font-size: var(--label-size);
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
.err {
  color: var(--clr-red);
  font-size: 13px;
}
.payment-flex {
  align-items: flex-start;
  justify-content: space-between;
}
.radio {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: 2px solid var(--clr-grey);
  border-radius: 7px;
  font-size: var(--overline-size);
  color: var(--clr-black);
  font-weight: bold;
  width: 19.313rem;
  height: 56px;
  padding: 0 1rem;
  overflow: hidden;
}
.methods label {
  display: flex;
  align-items: center;
  height: inherit;
}
#cash,
#e-money {
  width: auto;
}
.e-money {
  justify-content: space-between;
}

/* right column SUMMARY */
.summary-numbers h6 {
  font-size: var(--body-size);
  color: var(--clr-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.grand-total {
  padding: 1rem 0;
}
h6 span {
  font-size: var(--h6-size);
  color: var(--clr-black);
  font-weight: bolder;
  letter-spacing: 0.1px;
}
.grand-total span {
  color: var(--clr-peach);
}
.pay-btn {
  width: 100%;
  margin-top: 2rem;
}
.summary ul {
  min-height: 5rem;
  margin: 2rem 0;
}
.summary li {
  gap: 1rem;
  margin: 0.8rem 0;
}
.prod-img {
  width: 4rem;
  min-width: 4rem;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background-color: var(--clr-grey);
  overflow: hidden;
}
.prod-img img {
  object-fit: cover;
  width: inherit;
  height: inherit;
}
.prod-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
.prod-desc-name {
  font-weight: bolder;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
}
.price,
.prod-desc-name span {
  color: var(--clr-border);
  font-weight: bolder;
  text-transform: lowercase;
}
</style>
