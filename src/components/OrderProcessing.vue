<template>
  <div class="order">
    <div class="container">
      <h1 class="order__title">Оформление заказа</h1>
      <div class="order__box">
        <div class="col-8">
          <div class="order__left">
            <div class="order__your--order">
              <h3 class="order__your--title">Ваш заказ</h3>
              <div v-if="orderYourOrder" :class="{ 'order__your--box1': true }">
                <div class="order__your--product--box">
                  <img
                    class="order__your--product--img"
                    src="../assets/images/ssd-product.jpg"
                    alt=""
                  />
                  <h4 class="order__your--product--title">
                    Asus ROG STRIX STRIX SCOPE TKL RGB
                  </h4>
                  <div class="order__your--product--btns">
                    <button class="order__your--product--btn">-</button>
                    <div class="order__your--product--count">1</div>
                    <button class="order__your--product--btn">+</button>
                  </div>
                  <div class="order__your--product--price">26000 сум</div>
                  <button class="order__your--product--delete">
                    <img src="../assets/images/delete.svg" alt="" />
                  </button>
                </div>
                <div class="order__your--product--box">
                  <img
                    class="order__your--product--img"
                    src="../assets/images/ssd-product.jpg"
                    alt=""
                  />
                  <h4 class="order__your--product--title">
                    Asus ROG STRIX STRIX SCOPE TKL RGB
                  </h4>
                  <div class="order__your--product--btns">
                    <button class="order__your--product--btn">-</button>
                    <div class="order__your--product--count">1</div>
                    <button class="order__your--product--btn">+</button>
                  </div>
                  <div class="order__your--product--price">26000 сум</div>
                  <button class="order__your--product--delete">
                    <img src="../assets/images/delete.svg" alt="" />
                  </button>
                </div>
              </div>
              <div v-else :class="{ 'order__your--box2': true }">
                <div class="order__your--product--final">
                  <div class="order__your--product--images">
                    <img
                      class="order__your--product--img"
                      src="../assets/images/ssd-product.jpg"
                      alt=""
                    />
                    <img
                      class="order__your--product--img"
                      src="../assets/images/ssd-product.jpg"
                      alt=""
                    />
                  </div>
                  <button
                    @click="orderYourOrderChange"
                    class="order__your--order--btn--change"
                  >
                    Изменить
                  </button>
                </div>
              </div>
            </div>
            <button
              v-if="orderYourOrder"
              @click="orderObtainMethod"
              :class="{ 'order__your--order--btn': true }"
            >
              Далее
            </button>
            <div v-if="!orderObtain1" class="obtain">
              <div v-if="!orderObtain" class="order__obtain">
                <h3 class="order__obtain--title grey">Способ получения</h3>
              </div>
              <div v-else class="order__obtain">
                <h3 class="order__obtain--title">Способ получения</h3>
                <div class="order__obtain--box">
                  <div class="order__obtain--left">
                    <div class="order__obtain--left--a">
                      <label class="order__obtain--label">Ваш область</label>
                      <select v-model="region" class="order__obtain--select" id="city">
                        <option
                          v-for="region of regions"
                          :key="region.id"
                          @select="districts(region.id)"
                          class="order__obtain--option"
                          :value="region.id"
                        >
                          {{ region.name_ru }}
                        </option>
                      </select>

                      <label :class="{ 'order__obtain--label': true }">Ваш район</label>
                      <select
                        v-model="district"
                        class="order__obtain--select"
                        :style="{
                          cursor: region == '' ? 'not-allowed' : 'pointer',
                          opacity: region == '' ? 0.4 : 1,
                        }"
                        id="district"
                      >
                        <option
                          v-show="region"
                          v-for="(district, index) of allDistricts"
                          :key="district.id"
                          class="order__obtain--option"
                          :value="index"
                        >
                          {{ district }}
                        </option>
                      </select>
                    </div>
                    <div class="order__obtain--left--b">
                      <div class="wrapper">
                        <label class="container"
                          >Доставка
                          <input 
                            type="radio" 
                            v-model="deliveryValue" 
                            checked="checked" 
                            value="delivery"
                            name="delivery" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container"
                          >Самовывоз
                          <input 
                            v-model="deliveryValue"
                            value="pickup"
                            type="radio" name="delivery" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                  
                    </div>
                  </div>
                  <div v-if="delivery" class="order__obtain--right">
                    <div class="order__obtain--right--inside">
                      <div class="order__obtain--right--a">
                        <label class="order__obtain--label">Дата</label>
                        <input
                          class="order__obtain--date"
                          type="date"
                          value="2022-10-01"
                        />
                        <label class="order__obtain--label">Время</label>
                        <input
                          class="order__obtain--time"
                          type="time"
                          value="2022-10-01"
                        />
                      </div>
                      <div class="order__obtain--right--b">
                            <label class="order__obtain--label" for="street"
                                >Улица, дом/корпус</label
                            >
                            <input
                                v-model="street"
                                type="text"
                                class="order__obtain--input"
                                id="street"
                            />
                            <label class="order__obtain--label" for="home">Квартира</label>
                            <input
                                v-model="home"
                                type="text"
                                class="order__obtain--input"
                                id="home"
                            />
                        </div>
                    </div>
                    <div class="order__obtain--right--inside1">
                        <label class="order__obtain--label" for="comments"
                                >Комментарий курьеру</label
                            >
                            <textarea 
                                v-model="comments"
                                type="text"
                                class="order__obtain--textarea"
                                id="comments" 
                                cols="5" 
                                rows="3">
                            </textarea>
                    </div>
                  </div>
                  <div v-else class="order__obtain--location">
                    <div class="order__obtain--location--left">
                      <span class="order__obtain--location--products">
                          Товар доступен в {{locations.length}} магазинах
                        </span>
                      <ul class="order__obtain--location--list">
                        <li v-for="(location,index) of locations" :key="index"  class="order__obtain--location--item">
                          <label class="delivery__container"
                            >{{location.name}}
                            <input type="radio" :value="location.id" v-model="locat" checked="checked" name="location" />
                            <span class="checkmark"></span>
                          </label>
                          <span class="order__obtain--location--time">
                            ПН-ВС 09:00 — 22:00
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="order__obtain--location--right">
                      <!-- <img class="order__obtain--location--img" src="../assets/images/location.png" alt=""> -->
                      <iframe :src="`${locationURL}`"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="orderObtain1" class="order__obtain1">
                <h3 class="order__obtain--title">Способ получения</h3>
                <div v-if="deliveryValue == 'delivery'" class="order__obtain1--box">
                    <div class=" order__obtain1--left">
                      <div class="order__obtain1--left--inside">
                        <h3 class="order__obtain1--subtitle">
                            Доставка:
                        </h3>
                        <table class="table">
                        <tbody>
                          <tr>
                            <th>Город</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>Район</th>
                            <td>John</td>
                          </tr>
                          <tr>
                            <th>Улица, дом/корпус</th>
                            <td>Carter</td>
                          </tr>
                          <tr>
                            <th>Квартира</th>
                            <td>johncarter@mail.com</td>
                          </tr>
                          <tr>
                            <th>Дата</th>
                            <td>johncarter@mail.com</td>
                          </tr>
                          <tr>
                            <th>Время</th>
                            <td>johncarter@mail.com</td>
                          </tr>
                          <tr>
                            <th>Комментарий курьеру</th>
                            <td class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum, voluptas consequatur doloribus dignissimos animi quam cum sed beatae veniam?</td>
                          </tr>
                        </tbody>
                        </table>
                      </div>
                    </div>
                    <div class=" order__obtain1--rigth">
                        <button
                          @click="orderObtainChange"
                          class="order__your--order--btn--change"
                        >
                          Изменить
                        </button>
                    </div>
                </div>
                <div v-if="deliveryValue == 'pickup'" class="order__obtain1--box">
                    <div class="order__obtain1--left">
                      <div class="order__obtain1--left--inside">
                        <h3 class="order__obtain1--subtitle">
                          Самовывоз из:
                        </h3>
                        
                        <div class="order__obtain1--location">
                          г. Санкт-Петербург, Бульвар Новаторов, 75
                        </div>
                        <span class="order__obtain1--time">
                          ПН-ВС 09:00 — 22:00
                        </span>
                      </div>
                    </div>
                    <div class="order__obtain1--right">
                      <button
                          @click="orderObtainChange"
                          class="order__your--order--btn--change"
                        >
                          Изменить
                        </button>
                    </div>
                </div>
            </div>

            <button
              v-if="orderPaymentBtn"
              @click="orderPaymentMethod"
              class="order__your--order--btn"
            >
              Далее
            </button>

            <div v-if="orderPaymentChange" class="payment">
              <div v-if="!orderPayment" class="order__payment">
                <h3 class="order__payment--title grey">Способ оплаты</h3>
              </div>
              <div v-else class="order__payment">
                  <h3 class="order__payment--title">Способ оплаты</h3>
                  <select
                    v-model="payment"
                    class="order__payment--select"
                    id="payment"
                  >
                    <option
                      class="order__payment--option"
                      value="cash"
                    >Наличными</option>
                    <option
                      class="order__payment--option"
                      value="card"
                    >Пластик карта</option>
                  </select>
              </div>
            </div>

            <div v-if="!orderPaymentChange" class="payment"> 
              <div class="order__payment">
                <h3 class="order__payment--title">Способ оплаты</h3>
                <div class="order__payment--box">
                    <h3 class="order__payment--subtile">
                        {{payment == 'cash' ? 'Наличными' : 'Пластик карта'}}
                    </h3>
                    <button
                      @click="orderPaymenChangeMethod"
                      class="order__your--order--btn--change"
                    >
                      Изменить
                    </button>
                </div>
              </div>
            </div>

            <button
              v-if="orderUserBtn"
              @click="orderUserMethod"
              class="order__your--order--btn"
            >
              Далее
            </button>

          <div  class="user">
              <div  v-if="!user" class="order__user">
                <h3 class="order__user--title grey">Получатель</h3>
              </div>
              <div v-else class="order__user">
                <h3 class="order__user--title">Получатель</h3>
                <div class="order__user--box">
                  <div class="order__user--left">
                    <div class="order__user--left--a">
                      <label class="order__user--label">Имя</label>
                      <input
                          v-model="name"
                          type="text"
                          placeholder="Например, Иван"
                          class="order__user--input"
                      />
                      <label :class="{ 'order__user--label': true }">Ваш район</label>
                      <input
                        v-maska="'+998(##) ###-##-##'"
                        class="order__user--input"
                        v-model="phone"
                        placeholder="+998 (__) ___ __ __"
                      />
                    </div>
                    <div class="order__user--left--b">
                        <label class="order__user--label">Фамилия</label>
                        <input
                            v-model="lastname"
                            type="text"
                            placeholder="Например, Иванов"
                            class="order__user--input"
                        />
                        <label class="order__user--label">Эл. почта</label>
                        <input
                            v-model="email"
                            type="email"
                            placeholder="Например,  smart@gmail.com"
                            class="order__user--input"
                        />
                  
                    </div>
                  </div>
                  <div class="order__user--right">
                    <input type="checkbox" id="confirm" value="confirm">
                    <label class="order__user--label" for="confirm">Не перезванивать мне для подтверждения заказа</label>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="col-4">
          <div class="order__right">
            <div class="order__total">
              <h3 class="order__total--title">
                  Итого
              </h3>
              <div class="order__total--box">
                  <div class="order__total--box--a">
                    <h4 class="order__total--subtitle">
                      2 товара на сумму
                    </h4>
                    <span class="order__total--price">
                      100000 сум
                    </span>
                  </div>
                  <div class="order__total--box--b">
                    <h4 class="order__total--subtitle">
                      Стоимость доставки
                    </h4>
                    <span class="order__total--free">
                      бесплатно
                    </span>
                  </div>
                  <div class="order__total--box--c">
                      <h4 class="order__total--box--c--subtitle">
                        К оплате
                      </h4>
                      <span class="order__total--box--c--price">
                        100000 сум
                      </span>
                  </div>
              </div>
              <button
                  
                  class="order__total--btn"
                >
                  Оформить заказ
            </button>
            </div>
            <div class="order__total--user__agreement">
              <input type="checkbox" id="userAgreement" value="userAgreement">
              <label class="order__user--label" for="userAgreement">Подтверждая заказ, я принимаю условия пользовательского соглашения</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery : true,
      orderYourOrder: true,
      orderObtain : false,
      orderObtain1 : false,
      orderPayment : false,
      orderPaymentBtn : false,
      orderUserBtn : false,
      orderPaymentChange : true,
      user : false,
      allDistricts: [],
      locat : '',
      locationURL : '',
      comments : '',
      home: "",
      street: "",
      district: "",
      region: "",
      payment : 'cash',
      deliveryValue :'delivery'
    };
  },
  methods: {
    // orderYourOrderMethod() {
    //   this.orderYourOrder = false;
    //   this.orderObtain = true
    // },
    orderYourOrderChange() {
        this.orderYourOrder = true;
        this.orderObtain = false
    },
    orderObtainMethod(){
        this.orderYourOrder = false;
        this.orderObtain = true
        this.orderPaymentBtn = true
    },
    orderObtainChange(){
        //  this.orderYourOrder = true;
        this.orderObtain1 = false
        this.orderObtain1 = false
         this.orderObtain = true
         this.orderPaymentBtn = true
    },
    orderPaymentMethod(){
        this.orderPayment = true
        this.orderObtain1 = true
        this.orderPaymentBtn = false
        this.orderUserBtn = true
    },
    orderPaymenChangeMethod(){
      this.orderPayment = true
      this.orderPaymentChange = true
      this.orderUserBtn = true
    },
    orderUserMethod(){
        this.user = true
        this.orderUserBtn = false
        this.orderPaymentChange = false
    },
    districts(id) {
      console.log(id);
      this.$store.getters.getDistricts.forEach((dist) => {
        if (dist.region_id == id) {
          this.allDistricts.push(dist.name_ru);
          console.log(dist.name_ru);
        }
      });
    },
  },
  watch: {
    region(newValue, oldValue) {
      this.$store.getters.getDistricts.forEach((dist) => {
        if (dist.region_id == newValue) {
          this.allDistricts.push(dist.name_ru);
        }
      });
      if (oldValue) {
        this.allDistricts = [];
        this.$store.getters.getDistricts.forEach((dist) => {
          if (dist.region_id == newValue) {
            this.allDistricts.push(dist.name_ru);
          }
        });
      }
    },
    locat(newValue){
      this.$store.getters.getLocations.forEach((loc) => {
        if (loc.id == newValue) {
          this.locationURL = loc.location
        }
      });
    },
    deliveryValue(newValue) {
        if(newValue == 'pickup') {
          this.delivery = false
        } else if(newValue == 'delivery'){
          this.delivery = true
        }
    }
  },
  computed: {
    regions() {
      return this.$store.getters.getRegions;
    },
    locations(){
      
      return this.$store.getters.getLocations;
    }
  },
  created() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    this.locationURL = this.$store.getters.getLocations[this.$store.getters.getLocations.length - 1].location;
    this.$store.dispatch('clear')
    this.$store.dispatch('setToggleLoading', false)
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Components/OrderProcessing";
</style>
