<template>
  <h1 v-flash="300">Employe of the Month</h1>
  <div v-if="personData">
    <h3>
      {{ personData.name.first }} {{ personData.name.last }}
    </h3>
    <img :src="personData.picture.large"/>
  </div>
</template>
<script>
import randomPersonMixin from "../mixins/randomPersonMixin";

export default {
  name: "EmployeeOfTheMonthPage",
  mixins: [randomPersonMixin],
};
</script>