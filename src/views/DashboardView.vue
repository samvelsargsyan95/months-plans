<template>
  <div class="dashboard px-2 py-3">
    <h2 class="mb-3">2021 Wellness Plan</h2>
    <div class="dashboard__main radius-10 grey-border py-4 px-3">
      <div class="d-flex justify-between mb-3">
        <h3 class="mb-0">
          Your Progress
          <span class="small-grey-text text-normal">3 steps to complete</span>
        </h3>
        <div>
          <button
            @click="showAll"
            class="cursor-pointer small-grey-text me-1 dashboard__show-all p-1"
          > Show All Plans
          </button>

          <span
            @click="toggleHide"
            class="text-decoration-underline cursor-pointer small-grey-text"
          > hide
          </span>
        </div>
      </div>

      <div class="d-flex justify-center w-95 mx-auto">
        <div class="dashboard__left">
          <progress-chart v-if="allPlans.length" />
        </div>

        <div class="dashboard__right">
          <months-plans />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import ProgressChart from "@/components/ProgressChart";
import MonthsPlans from "@/components/MonthsPlans";
import GeneralMixin from "@/mixins/GeneralMixin";

export default {
  name: "DashboardView",
  components: {
    ProgressChart,
    MonthsPlans
  },

  mixins: [ GeneralMixin ],

  computed: {
    ...mapGetters({
      showPlans: "plans/showPlans",
      showAllPlans: "plans/showAllPlans"
    }),
  },

  methods: {
    ...mapMutations({
      setData: "plans/setData",
      toggleShowPlans: "plans/toggleShowPlans",
      toggleShowAllPlans: "plans/toggleShowAllPlans"
    }),

    showAll() {
      this.setData({ showPlans: true, selectedMonth: null })
      this.toggleShowAllPlans({ showAllPlans: !this.showAllPlans })
    },

    toggleHide() {
      this.toggleShowPlans({ showPlans: !this.showPlans })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles";

.dashboard {
  & h2 {
    line-height: 23px;
  }

  &__left {
    width: 20%;
    margin-bottom: 30px;
    margin-right: 28px;
  }

  &__right {
    width: 75%;
  }

  &__show-all {
    background: white;
    border: 1px solid;
    border-radius: 5px;
  }
}
</style>


