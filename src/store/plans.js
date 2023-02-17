export const plans = {
  namespaced: true,
  state: {
    monthsList: [
      {
        title: 'Jan',
        plans: [
          {
            id: 1,
            type: 3,
            title: 'Ozone therapy'
          },
          {
            id: 2,  
            type: 3,
            title: 'Hormone replacement therapy'
          }
        ],
      },
      {
        title: 'Feb',
        plans: [
          {
            id: 3,
            type: 2,
            title: 'NAD'
          }
        ],
      },
      {
        title: 'Mar',
        plans: [
          {
            id: 4,
            type: 1,
            title: 'NAD'
          },
          {
            id: 5,
            type: 3,
            title: 'Ozone therapy'
          },
          {
            id: 6,
            type: 2,
            title: 'Hormone replacement therapy'
          }
        ],
      },
      {
        title: 'Apr',
        plans: [
          {
            id: 7,
            type: 1,
            title: 'Ozone therapy'
          },
          {
            id: 8,
            type: 3,
            title: 'NAD'
          },
          {
            id: 9,
            type: 3,
            title: 'Hormone replacement therapy'
          }
        ],
      },
      {
        title: 'May',
        plans: [
          {
            id: 10,
            type: 3,
            title: 'Ozone therapy'
          },
          {
            id: 11,
            type: 2,
            title: 'NAD'
          },
        ],
      },
      {
        title: 'Jun',
        plans: [],
      },
      {
        title: 'Jul',
        plans: [
          {
            id: 12,
            type: 1,
            title: 'Ozone therapy'
          },
          {
            id: 13,
            type: 2,
            title: 'NAD'
          },
        ],
      },
      {
        title: 'Aug',
        plans: [
          {
            id: 14,
            type: 3,
            title: 'NAD'
          },
          {
            id: 15,
            type: 3,
            title: 'Ozone therapy'
          },
          {
            id: 16,
            type: 3,
            title: 'Hormone replacement therapy'
          },
          {
            id: 17,
            type: 3,
            title: 'Ozone therapy'
          }
        ],
      },
      {
        title: 'Sep',
        plans: [
          {
            id: 18,
            type: 3,
            title: 'Ozone therapy'
          },
          {
            id: 19,
            type: 2,
            title: 'Hormone replacement therapy'
          }
        ],
      },
      {
        title: 'Oct',
        plans: [],
      },
      {
        title: 'Nov',
        plans: [
          {
            id: 20,
            type: 1,
            title: 'Hormone replacement therapy'
          },
          {
            id: 21,
            type: 2,
            title: 'NAD'
          },
        ],
      },
      {
        title: 'Dec',
        plans: [],
      },
    ],
    selectedMonth: null,
    showPlans: true,
    showAllPlans: true
  },
  mutations: {
    setData(state, data) {
      for (const key in data) {
        state[key] = data[key]
      }
    },

    toggleShowPlans(state) {
      state.showPlans = !state.showPlans
    },

    toggleShowAllPlans(state) {
      state.showAllPlans = !state.showAllPlans
    },

    deletePlan(state, id) {
      state.monthsList.map((item) => {
        item.plans.map((plan, index) => {
          if (plan.id === id) {
            item.plans.splice(index, 1)
          }
        })
      })
    },

    editPlan(state, { id, title }) {
      state.monthsList.map((item) => {
        item.plans.map((plan) => {
          if (plan.id === id) {
            plan.title = title
          }
        })
      })
    }
  },
  actions: {},
  getters: {
    monthsList: (state) => state.monthsList,
    selectedMonth: (state) => state.selectedMonth,
    showPlans: (state) => state.showPlans,
    showAllPlans: (state) => state.showAllPlans
  },
};
