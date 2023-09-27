<template>
  <div>
    <div class="container">
      <div class="filter" @wheel.prevent @touchmove.prevent @scroll.prevent v-show="isPaid">
        <div class="confirmation-modal" v-show="isPaid">
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803" />
            </g>
          </svg>
          <h2 class="modal-title">thank you for your order</h2>
          <p class="modal-p">You will receive an eamil confirmation shortly.</p>

          <div class="recap-container flex">
            <div class="recap flex">
              <div class="prod-img">
                <img :src="require('../assets/' + myCart[0].thumbnail)" alt="" />
              </div>
              <div class="prod-desc pos">
                <p class="prod-desc-name flex recap-qt">
                  <strong>{{ myCart[0].name }}</strong> <span>x{{ myCart[0].quantity }}</span>
                </p>
                <p class="price">$ {{ myCart[0].totalPrice }}</p>
                <p class="others">And {{ myCart.length - 1 }} other item(s)</p>
              </div>
            </div>
            <div class="recap-total">
              <h2>grand total</h2>
              <p class="recap-price">$ 5,446</p>
            </div>
          </div>

          <button class="btn-1 pay-btn" @click="backToHome()"><p class="btn-1-p">back to home</p></button>
        </div>
      </div>

      <router-link to="/" class="back-link">Go Back</router-link>
      <section class="large flex">
        <!-- PAYMENT FORM -->
        <form class="checkout" novalidate>
          <h1>checkout</h1>
          <div class="billing">
            <h3>billing details</h3>
            <div class="flex-form-group flex">
              <div class="form-group">
                <!-- NAME -->
                <label for="name" :class="{ errorLabel: !isNameValid }"
                  >Name
                  <p class="err" v-show="!isNameValid">Wrong format</p></label
                >

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Alexei Ward"
                  v-model="myForm.name"
                  :class="{
                    errorInput: !isNameValid,
                    validateInput: isNameValid,
                    defaultInput: isNameValid === 'empty',
                  }"
                />
              </div>
              <div class="form-group">
                <!-- EMAIL -->
                <label for="email" :class="{ errorLabel: !isEmailValid }"
                  >Email Address
                  <p class="err" v-show="!isEmailValid">Wrong format</p></label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alexei@mail.com"
                  v-model="myForm.email"
                  :class="{
                    errorInput: !isEmailValid,
                    validateInput: isEmailValid,
                    defaultInput: isEmailValid === 'empty',
                  }"
                />
              </div>
            </div>
            <div class="form-group">
              <!-- PHONE -->
              <label for="phone" :class="{ errorLabel: !isPhoneValid }"
                >Phone Number
                <p class="err" v-show="!isPhoneValid">Wrong format</p></label
              >
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="01 23 45 67 89"
                v-model="myForm.phone"
                :class="{
                  errorInput: !isPhoneValid,
                  validateInput: isPhoneValid,
                  defaultInput: isPhoneValid === 'empty',
                }"
                @input="formatedPhoneNumber"
              />
            </div>
          </div>
          <div class="shipping">
            <h3>shipping info</h3>
            <div class="form-group">
              <!-- ADDRESS -->
              <label for="address" :class="{ errorLabel: !isAddressValid }"
                >address
                <p class="err" v-show="!isAddressValid">Wrong format</p></label
              >
              <input
                type="text"
                name="address"
                id="address"
                placeholder="1137 Williams Avenue"
                v-model="myForm.address"
                :class="{
                  errorInput: !isAddressValid,
                  validateInput: isAddressValid,
                  defaultInput: isAddressValid === 'empty',
                }"
              />
            </div>
            <div class="flex-form-group flex">
              <div class="form-group">
                <!-- ZIP-CODE -->
                <label for="zip" :class="{ errorLabel: !isZipCodeValid }"
                  >Zip code
                  <p class="err" v-show="!isZipCodeValid">Wrong format</p></label
                >
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="59110"
                  v-model="myForm.zipCode"
                  :class="{
                    errorInput: !isZipCodeValid,
                    validateInput: isZipCodeValid,
                    defaultInput: isZipCodeValid === 'empty',
                  }"
                />
              </div>
              <div class="form-group">
                <!-- CITY -->
                <label for="city" :class="{ errorLabel: !isCityValid }"
                  >City
                  <p class="err" v-show="!isCityValid">Wrong format</p></label
                >
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="New York"
                  v-model="myForm.city"
                  :class="{
                    errorInput: !isCityValid,
                    validateInput: isCityValid,
                    defaultInput: isCityValid === 'empty',
                  }"
                />
              </div>
            </div>
            <div class="form-group">
              <!-- Country -->
              <label for="country" :class="{ errorLabel: !isCountryValid }"
                >Country
                <p class="err" v-show="!isCountryValid">Wrong format</p></label
              >
              <input
                type="text"
                name="country"
                id="country"
                placeholder="United States"
                v-model="myForm.country"
                :class="{
                  errorInput: !isCountryValid,
                  validateInput: isCountryValid,
                  defaultInput: isCountryValid === 'empty',
                }"
              />
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

              <div class="e-money flex" v-if="myForm.payment === 'e-money'">
                <div class="form-group">
                  <label for="e-money-number" :class="{ errorLabel: !isEmoneyValid }"
                    >e-Money Number
                    <p class="err" v-show="!isEmoneyValid">Wrong format</p></label
                  >
                  <input
                    type="text"
                    name="e-money-number"
                    id="e-money-number"
                    placeholder="238521993"
                    v-model="myForm.eMoneyNb"
                    :class="{
                      errorInput: !isEmoneyValid,
                      validateInput: isEmoneyValid,
                      defaultInput: isEmoneyValid === 'empty',
                    }"
                  />
                </div>
                <div class="form-group">
                  <label for="e-money-pin" :class="{ errorLabel: !isEmoneyPinValid }"
                    >e-Money-PIN
                    <p class="err" v-show="!isEmoneyPinValid">Wrong format</p></label
                  >
                  <input
                    type="text"
                    name="ce-money-pin"
                    id="e-money-pin"
                    placeholder="6891"
                    v-model="myForm.eMoneyPin"
                    :class="{
                      errorInput: !isEmoneyPinValid,
                      validateInput: isEmoneyPinValid,
                      defaultInput: isEmoneyPinValid === 'empty',
                    }"
                  />
                </div>
              </div>
              <div class="payment-txt flex-align" v-if="myForm.payment === 'cash'">
                <img src="../assets/checkout/icon-cash-on-delivery.svg" alt="icon of cash payment" />
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
          <p class="formErr" v-show="formErr">
            Some of your personal informations seems to be incorrect, please verify every field!
          </p>
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
      this.backToHome();
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
    isEmailValid() {
      if (this.myForm.email.trim() === '') {
        return 'empty';
      }
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.myForm.email);
    },
    isNameValid() {
      if (this.myForm.name.trim() === '') {
        return 'empty';
      }
      return /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,} [A-Za-zÀ-ÖØ-öø-ÿ]{3,}$/.test(this.myForm.name);
    },
    isPhoneValid() {
      const phoneNumber = this.myForm.phone.replace(/-/g, '');
      if (this.myForm.phone.trim() === '') {
        return 'empty';
      }
      return /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/.test(phoneNumber);
    },
    isAddressValid() {
      if (this.myForm.address.trim() === '') {
        return 'empty';
      }
      return /^[a-zA-Z0-9\s,'À-ÖØ-öø-ÿ-]{10,}$/.test(this.myForm.address);
    },
    isZipCodeValid() {
      if (this.myForm.zipCode.trim() === '') {
        return 'empty';
      }
      return /^\d{5}$/.test(this.myForm.zipCode);
    },
    isCityValid() {
      if (this.myForm.city.trim() === '') {
        return 'empty';
      }
      return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(this.myForm.city);
    },
    isCountryValid() {
      if (this.myForm.country.trim() === '') {
        return 'empty';
      }
      return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s',.-]+$/.test(this.myForm.country);
    },
    isEmoneyValid() {
      if (this.myForm.eMoneyNb.trim() === '') {
        return 'empty';
      }
      return /^\d{8,}$/.test(this.myForm.eMoneyNb);
    },
    isEmoneyPinValid() {
      if (this.myForm.eMoneyPin.trim() === '') {
        return 'empty';
      }
      return /^\d{8,}$/.test(this.myForm.eMoneyPin);
    },
  },
  methods: {
    ordering() {
      const isBasicInfoValid =
        this.isNameValid &&
        this.isEmailValid &&
        this.isPhoneValid &&
        this.isAddressValid &&
        this.isCityValid &&
        this.isZipCodeValid;

      const isEmoneyValid = this.myForm.payment === 'e-money' && this.isEmoneyValid === true && this.isEmoneyPinValid === true;
      const cashMoney = this.myForm.payment === 'cash';
      const paymentMethod = isEmoneyValid || cashMoney;

      if (isBasicInfoValid && paymentMethod) {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        this.isPaid = true;
        this.formErr = false;
      } else {
        this.formErr = true;
      }
    },
    backToHome() {
      this.$store.commit('resetCart');
      this.$router.push('/');
    },
    formatedPhoneNumber(event) {
      const input = event.target.value.replace(/-/g, '');
      let formattedInput = input.replace(/(\d{2})/g, '$1-');
      if (formattedInput.endsWith('-')) {
        formattedInput = formattedInput.slice(0, -1);
      }
      this.myForm.phone = formattedInput;
    },
  },
  data() {
    return {
      myCart: [],
      isPaid: false,
      formErr: false,
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
  min-height: 100vh;
}
.filter {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 5;
  isolation: isolate;
  display: grid;
  width: 100%;
  place-content: center;
  animation: appearing 0.4s forwards;
}
.confirmation-modal {
  background-color: var(--clr-white);
  border-radius: 10px;
  width: 32rem;
  padding: 3rem;
  height: 35rem;
  z-index: 1;
  position: relative;
  opacity: 0;
  animation: appearing 0.4s forwards;
  animation-delay: 0.4s;
}
.recap {
  gap: 0.5rem;
  width: 100%;
}
.modal-title {
  font-size: var(--h2-size);
  margin: 2rem 0 1rem;
}
.modal-p {
  color: var(--clr-border);
  margin-bottom: 1rem;
}
.pos {
  position: relative;
}
.others {
  font-size: 14px;
  font-weight: bold;
  color: var(--clr-border);
  border-top: 1px solid var(--clr-trans-border);
  position: absolute;
  bottom: -2rem;
}
.recap-container {
  border-radius: 10px;
  background-color: var(--clr-grey);
  justify-content: space-between;
  min-height: 8.5rem;
  align-items: center;
  gap: 0.5rem;
}
.recap-total {
  background-color: var(--clr-black);
  border-radius: 0 10px 10px 0;
  min-height: inherit;
  height: 100%;
  padding: 0.5rem 1rem;
  min-width: 10rem;
  display: grid;
  place-content: center;
}
.recap-total h2 {
  color: var(--clr-border);
  font-size: 15px;
}
.recap-total p {
  color: var(--clr-white);
  font-weight: bold;
  letter-spacing: 1px;
}
.recap-qt {
  justify-content: space-between;
  width: 100%;
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
label,
h5 {
  font-size: var(--label-size);
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
label {
  position: relative;
}
.flex-form-group {
  gap: 2rem;
}
.form-group {
  margin: 1rem 0;
}
.payment-txt {
  gap: 1.5rem;
  margin: 1rem 0 1.5rem;
}
.payment-txt p {
  color: var(--clr-border);
  max-width: 34.625rem;
}
.err {
  color: var(--clr-red);
  font-size: 13px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.formErr {
  color: var(--clr-red);
  font-size: 14px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 0.4rem;
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
  margin-top: 2.5rem;
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
.errorInput {
  border: 2px solid var(--clr-red);
}
.errorLabel {
  color: var(--clr-red);
}
.validateInput {
  border: 2px solid #00ca6c;
}
.defaultInput {
  border: 2px solid var(--clr-grey);
}
</style>
