<template>
  <h1>User Info</h1>
  <div v-if="shouldShowValidationErrors">
    <div v-for="error in validationErrors" :key="error" class="error">
      {{ error }}
    </div>
  </div>
  <div>
    <input placeholder="Name" v-model="name" />
    <input placeholder="Age" type="number" v-model.number="age" />
    <input placeholder="Address" v-model="address" />
    <button @click="displayData">Save</button>
  </div>
</template>
<script>
import randomPersonMixin from "../mixins/randomPersonMixin";

export default {
  name: "UserInfoPage",
  mixins: [randomPersonMixin],
  props: ["userInfo"],
  emits: ["userInfoSaved"],
  data() {
    return {
      name: this.userInfo.name,
      age: this.userInfo.age,
      address: this.userInfo.address,
      shouldShowValidationErrors: false,
    };
  },
  methods: {
    displayData() {
      this.shouldShowValidationErrors = true;
      //alert(
      //  `name is ${this.name}, age is ${this.age}, address is ${this.address}`
      //);
      if (this.validationErrors.length === 0) {
        this.$emit("userInfoSaved", this.name, this.age, this.address);
        alert("Successfully saved data!");
      }
    },
  },
  computed: {
    validationErrors() {
      let errors = [];
      if (this.name.length < 2) {
        errors.push("Please enter a name longer than 2 characters");
      }
      if (this.age < 16) {
        errors.push("Age must be 16 or greater");
      }
      if (this.address.length <= 5) {
        errors.push("Please enter an address longer than 5 characters");
      }
      return errors;
    },
  },
};
</script>
<style>
.error {color: red;}
</style>