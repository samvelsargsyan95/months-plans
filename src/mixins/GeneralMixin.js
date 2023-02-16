import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      monthsList: "plans/monthsList",
    }),

    allPlans() {
      const plans = [];
      this.monthsList.map((item) => {
        if (item.plans.length) {
          plans.push(...item.plans);
        }
      });

      return plans;
    },
  }
}