<template>
  <div>
    <div class="months radius-10 grey-border d-flex justify-between mt-4">
      <div
        v-for="(item, key) of monthsList"
        :key="key"
        :class="{
          months__selected:
            selectedMonth && selectedMonth?.title === item.title,
        }"
        class="cursor-pointer d-flex flex-column align-center h-100 px-2 py-1"
        @click="selectMonth(item)"
      >
        <span class="months__title">{{ item.title }}</span>

        <div v-if="item.plans.length">
          <span
            v-for="(plan, index) of item.plans"
            :key="index"
            :class="{
              'completed-line': plan.type === 3,
              'booked-line': plan.type === 2,
              'book-now-line': plan.type === 1,
            }"
            class="d-flex flex-column w-100 plan-line"
          >
          </span>
        </div>
      </div>
    </div>

    <transition name="slide">
      <template v-if="showPlans">
        <div v-if="selectedMonth && selectedMonth?.plans.length" class="plans">
          <badge-component
            v-for="(item, index) of selectedMonth.plans"
            @delete-plan="deletePlan(item.id)"
             @edit-plan="editPlan({id: item.id, title: $event})"
            :key="index"
            :title="item.title"
            :badge-type="item.type"
            :class="{ 'mb-2': index !== selectedMonth.plans.length - 1 }"
          />
        </div>

        <div v-if="showAllPlans" class="plans">
          <badge-component
            v-for="(item, index) of allPlans"
            @delete-plan="deletePlan(item.id)"
            @edit-plan="editPlan({id: item.id, title: $event})"
            :key="index"
            :title="item.title"
            :badge-type="item.type"
            :class="{ 'mb-2': index !== allPlans.length - 1 }"
          />
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BadgeComponent from "@/components/BadgeComponent";
import GeneralMixin from "@/mixins/GeneralMixin";

export default {
  name: "MonthsPlans",
  components: {
    BadgeComponent,
  },
  mixins: [ GeneralMixin ],
  computed: {
    ...mapGetters({
      selectedMonth: "plans/selectedMonth",
      showPlans: "plans/showPlans",
      showAllPlans: "plans/showAllPlans"
    }),
  },
  methods: {
    ...mapMutations({
      setData: "plans/setData",
      deletePlan: "plans/deletePlan",
      editPlan: "plans/editPlan"
    }),

    selectMonth(selectedMonth) {
      this.setData({
        selectedMonth,
        showAllPlans: false,
        showPlans: true
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles";

.months {
  overflow: hidden;
  height: 60px;

  &__selected {
    background-color: rgba(186, 210, 247, 0.644);
    color: white;
    text-shadow: 1px 1px 1px black;
    transition: all 0.4s;
    height: 100%;

    & span {
      color: white;
    }
  }

  &__title {
    font-size: 12px;
    color: rgb(71, 142, 249);
    font-weight: 500;
    margin-bottom: 1px;
  }
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.plan-line {
  height: 5px;
  border-radius: 1.5px;
  margin-top: 1.5px;
  width: 45px;
}

.completed-line {
  background-color: #5fb05f;
}

.booked-line {
  background-color: #4b4bde;
}

.book-now-line {
  background-color: #70baff;
}
</style>