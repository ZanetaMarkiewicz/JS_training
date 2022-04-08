<template>
  <h1 v-flash="100">Employe of the Month</h1>
  <div v-if="personData">
    <h3>
      {{ personData.name.first }} {{ personData.name.last }}
      {{ personData.picture.thumbnail }}
    </h3>
  </div>
</template>
<script>
import randomPersonMixin from "../mixins/randomPersonMixin";

export default {
  name: "EmployeeOfTheMonthPage",
  mixins: [randomPersonMixin],
};
</script>