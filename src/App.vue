<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
:root {
  --clr-black: #000000;
  --clr-dark-grey: #101010;
  --clr-grey: #f1f1f1;
  --clr-offwhite: #fafafa;
  --clr-white: #ffffff;
  --clr-peach: #d87d4a;
  --clr-light-peach: #fbaf85;
  --clr-red: #cd2c2c;

  --h1-size: 3.5rem;
  --h2-size: 2.5rem;
  --h3-size: 2rem;
  --h4-size: 1.75rem;
  --h5-size: 1.5rem;
  --h6-size: 1.125rem;

  --overline-size: 0.875rem;
  --sub-size: 0.813rem;
  --body-size: 0.938rem;

  --margin-bottom: 10rem;
  --page-padding: 5rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}

.active {
  display: block;
}

.flex {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-align {
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  display: block;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  width: 10rem;
  height: 3rem;
}

a,
button,
svg {
  transition: all 0.3s;
}

main {
  background-color: lightslategray;
  min-height: 100dvh;
  width: 100%;
}

/* --- TITLES & paraph --- */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: var(--clr-black);
}
h1 {
  font-size: 3.5rem;
  letter-spacing: 2px;
  line-height: 58px;
}
h2 {
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  line-height: 44px;
}
h3 {
  font-size: 2rem;
  letter-spacing: 1.15px;
  line-height: 36px;
}
h4 {
  font-size: 1.75rem;
  letter-spacing: 2px;
  line-height: 38px;
}
h5 {
  font-size: 1.5rem;
  letter-spacing: 1.7px;
  line-height: 33px;
}
h6 {
  font-size: 1.125rem;
  letter-spacing: 1.3px;
  line-height: 24px;
}
p {
  font-size: var(--body-size);
  line-height: 25px;
  font-weight: medium;
}
/* --- BUTTONS STYLE --- */
.btn-1 {
  background-color: var(--clr-peach);
}
.btn-1:hover {
  background-color: var(--clr-light-peach);
}
.btn-2 {
  background-color: var(--clr-white);
  border: 1px solid var(--clr-black);
}
.btn-2:hover {
  background-color: var(--clr-black);
}
.btn-3 {
  background-color: transparent;
}
.btn-3-p {
  color: var(--clr-grey);
}
.btn-3:hover .btn-3-p {
  color: var(--clr-peach);
}
.btn-1-p,
.btn-2-p {
  text-transform: uppercase;
}
.btn-2:hover .btn-2-p {
  color: var(--clr-white);
}

/* --- FORM STYLE --- */
input[type='text'] {
  border: 1px solid var(--clr-grey);
  border-radius: 7px;
}
.input-err {
  border: 2px solid var(--clr-red);
}

/* --- RESPONSIVE --- */
@media screen and (max-width: 1440px) {
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
</style>
