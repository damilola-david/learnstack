<template>
  <section class="register">
    <router-link to="/" class="logo"><h2>LEARNSTACKS</h2></router-link>
    <div class="register__container">
      <div class="register__banner__wrapper">
        <div class="register__banner">
          <div class="register__banner__image">
            <img src="../../../public/IMAGES/one.jpg" alt="" class="" />
          </div>
          <div class="register__banner__text">
            <h1>lets start creating a lot of magic today</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              vel ipsam unde libero magni itaque.
            </p>
          </div>
        </div>
      </div>

      <div class="register__form__wrapper">
        <div class="register__form">
          <h2 style="margin-bottom: 10px">application form</h2>
          <p>fill in your details to get started</p>
          <form action="" method="post">
            <div class="form__grid">
              <div class="form__grid__item">
                <label for="firstname">firstname</label>
                <input type="text" name="" id="" placeholder="firstname" />
              </div>
              <div class="form__grid__item">
                <label for="lastname">lastname</label>
                <input type="text" name="" id="" placeholder="lastname" />
              </div>
            </div>

            <div class="form__grid">
              <div class="form__grid__item">
                <label for="country">country</label>
                <input
                  type="text"
                  @click="showCountryOptions()"
                  ref="country"
                  name=""
                  id=""
                  placeholder="select country"
                  :value="countrySelected['name']"
                />
                <div class="options" v-if="isCountryVisible">
                  <ul>
                    <li
                      v-for="country in countriesList"
                      :key="country"
                      @click="
                        selectOption(
                          country,
                          'countriesList',
                          'countrySelected'
                        );
                        showCountryOptions();
                      "
                    >
                      <img
                        :src="country.flagImage"
                        style="width: 30px; height: 30px; object-fit: cover"
                        alt=""
                      />
                      <p style="margin-left: 10px">{{ country.name }}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="form__grid__item">
                <label for="state of origin">state of origin</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="state of origin"
                />
              </div>
            </div>

            <div class="form__grid">
              <div class="form__grid__item">
                <label for="date of birth">date of birth</label>
                <input type="date" name="" id="" placeholder="date of birth" />
              </div>
              <div class="form__grid__item">
                <label for="gender">gender</label>
                <input
                  type="text"
                  @click="showGenderOptions()"
                  ref="gender"
                  name=""
                  id=""
                  placeholder="select gender"
                  :value="genderSelected"
                />
                <div
                  class="options"
                  :style="{ maxHeight: isGenderVisible ? '250px' : '0px' }"
                  v-show="isGenderVisible"
                >
                  <ul>
                    <li
                      v-for="gender in genderList"
                      :key="gender"
                      @click="
                        selectOption(gender, 'genderList', 'genderSelected'),
                          showGenderOptions()
                      "
                    >
                      {{ gender }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form__grid">
              <div class="form__grid__item">
                <label for="Phone-number">phone number</label>
                <input type="number" name="" id="" placeholder="phone number" />
              </div>
              <div class="form__grid__item">
                <label for="email address">email address</label>
                <input type="text" name="" id="" placeholder="email address" />
              </div>
            </div>

            <div class="form__grid">
              <div class="form__grid__item">
                <label for="deparment">department</label>
                <input
                  type="text"
                  @focus="showDepartmentOptions()"
                  :value="departmentSelected"
                  name=""
                  id=""
                  placeholder="select department"
                />
                <div class="options" v-show="isDepartmentVisible">
                  <ul>
                    <li
                      v-for="department in departmentList"
                      :key="department"
                      @click="
                        selectOption(
                          department,
                          'departmentList',
                          'departmentSelected'
                        );
                        showDepartmentOptions();
                      "
                    >
                      {{ department }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form__grid__item">
                <label for="courses">pick subjects</label>
                <input
                  type="text"
                  @click="showSubjectOptions"
                  :value="subjectsSelected"
                  name=""
                  id=""
                  placeholder="select subjects"
                />
                <div class="options" v-show="isSubjectVisible">
                  <ul>
                    <li v-for="subject of subjectsArray" :key="subject">
                      <input
                        type="checkbox"
                        name=""
                        :value="subject"
                        v-model="subjectsSelected"
                        id=""
                      />{{ subject }}
                    </li>
                    <button
                      @click="
                        selectOption(
                          department,
                          'departmentList',
                          'departmentSelected'
                        );
                        showSubjectOptions();
                      "
                    >
                      save
                    </button>
                  </ul>
                </div>
              </div>
            </div>
            <the-button>proceed</the-button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../SCSS/abstract" as a;
.register {
  height: 100vh;
  position: relative;

  //styling the logo
  .logo {
    position: absolute;
    top: 10px;
    left: 50px;
    @include a.breakpoint(small) {
      left: 40px;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 100vh;
    gap: 10px;
    @include a.breakpoint(small) {
      grid-template-columns: repeat(1, 1fr);
    }
    @include a.breakpoint(medium) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: 50vh;
    }
  }
  &__banner__wrapper {
    padding: 40px 40px;
    margin-top: 20px;
    @include a.flex(center, center);
    @include a.breakpoint(small) {
      display: none;
    }
    @include a.breakpoint(medium) {
      @include a.flex(flex-start, center);
    }
  }
  &__banner {
    background: #000;
    color: #fff;
    border-radius: 20px;
    height: 100%;
    @include a.breakpoint(medium) {
      height: 100%;
    }
  }
  &__banner__image {
    height: 50%;
    padding: 20px;
    @include a.breakpoint(medium) {
      height: 60%;
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  &__banner__text {
    @include a.container(85%);
    margin-top: 20px;
    @include a.flex(center, center);
    flex-direction: column;
    @include a.breakpoint(medium) {
      height: 100%;
    }
    h1 {
      margin-bottom: 10px;
      font-size: 40px;
      line-height: 60px;
      @include a.breakpoint(medium) {
        font-size: 30px;
        line-height: 40px;
      }
    }
    p {
      line-height: 35px;
      @include a.breakpoint(medium) {
        line-height: 25px;
      }
    }
  }

  &__form__wrapper {
    //background-color: red;
  }
  &__form {
    //background: fuchsia;
    padding: 50px 40px;
  }
  .form__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 50px;
    gap: 30px;
    //background: blue;
    margin: 40px 0px;
    @include a.breakpoint(small) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 50px;
    }
  }
  .form__grid__item {
    position: relative;
    //background: purple;
    .options {
      background-color: #fff;
      z-index: 90;
      position: absolute;
      top: 80px;
      border-radius: 8px;
      padding: 5px 10px;
      width: 100%;
      max-height: 250px;
      overflow-y: auto;
      box-shadow: 0px 0px 1px 0.5px #e8e7e7;
      transition: max-height 10s ease-in;
      &::-webkit-scrollbar {
        width: 5px;
        margin-right: 20px;
      }
      &::-webkit-scrollbar-track {
        background: #dcd9d9;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        height: 2px;
        background: #bdbcbc;
        border-radius: 20px;
      }
      ul {
        list-style-type: none;
      }
      li {
        margin: 10px 0px;
        //background: forestgreen;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        &:hover {
          background: #f0efef;
          cursor: pointer;
        }

        input {
          accent-color: a.$green;
        }
      }
    }
  }
  .form__grid__item > input {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1.5px solid #d8d5d5;
    outline: none;
    transition: border 0.1s ease-in-out;
    &:focus {
      border-color: rgb(35, 197, 3);
    }
  }
  .form__grid__item > label {
    font-weight: 200;
    font-size: 14px;
    margin-bottom: 5px;
    display: inline-block;
  }
  button {
    width: 100%;
    background: #000;
    color: #fff;
    border: 2px solid #fff;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isCountryVisible: false,
      isGenderVisible: false,
      isDepartmentVisible: false,
      isSubjectVisible: false,
      countriesList: [
        { name: "nigeria", flagImage: "../../../IMAGES/nigeria.png" },
        { name: "ghana", flagImage: "../../../IMAGES/ghana.png" },
        { name: "south africa", flagImage: "../../../IMAGES/south-africa.png" },
        { name: "kenya", flagImage: "../../../IMAGES/kenya.png" },
        { name: "rwanda", flagImage: "../../../IMAGES/rwanda.png" },
        {
          name: "united states",
          flagImage: "../../../IMAGES/united-states.png",
        },
        { name: "canada", flagImage: "../../../IMAGES/canada.png" },
        {
          name: "united kingdom",
          flagImage: "../../../IMAGES/united-kingdom.png",
        },
      ],
      scienceSubjects: ["physics", "chemistry", "biology", "mathematics"],
      artsSubjects: ["government", "history", "crk", "literature"],
      commercialSubjects: ["economics", "acccounting", "book-keeping"],
      subjectsArray: [],
      subjectsSelected: [],
      genderList: ["male", "female"],
      departmentList: ["sciences", "arts", "commercials"],
      countrySelected: {},
      genderSelected: null,
      departmentSelected: null,
    };
  },
  methods: {
    showCountryOptions() {
      this.isCountryVisible = !this.isCountryVisible;

      this.isGenderVisible = false;
      this.isDepartmentVisible = false;
    },
    showGenderOptions() {
      this.isGenderVisible = !this.isGenderVisible;
      this.isCountryVisible = false;
      this.isDepartmentVisible = false;
    },
    showDepartmentOptions() {
      this.isDepartmentVisible = !this.isDepartmentVisible;
      this.isGenderVisible = false;
      this.isCountryVisible = false;
      this.isSubjectVisible = false;
    },

    subjectOptions() {
      this.isSubjectVisible = !this.isSubjectVisible;
      this.isDepartmentVisible = false;
      if (this.departmentSelected === "sciences") {
        this.subjectsArray = this.scienceSubjects;
      }
      if (this.departmentSelected === "arts") {
        this.subjectsArray = this.artsSubjects;
      }
      if (this.departmentSelected === "commercials") {
        this.subjectsArray = this.commercialSubjects;
      }
    },
    selectOption(option, optionList, optionSelected) {
      let picked = this[optionList].indexOf(option);
      this[optionSelected] = this[optionList][picked];
      console.log(this.countrySelected);
    },
  },
  computed: {
    showSubjectOptions() {
      return this.subjectOptions;
    },
  },
  watch: {
    departmentSelected(oldvalue, newvaluue) {
      if (oldvalue != newvaluue) {
        this.subjectsSelected = [];
      }
    },
  },
};
</script>
