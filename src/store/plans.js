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
            title: 'Ozone herapy'
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
            title: 'Ozone herapy'
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
            title: 'Ozone herapy'
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
            title: 'Ozone herapy'
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
            title: 'Ozone herapy'
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
            title: 'Ozone herapy'
          },
          {
            id: 16,
            type: 3,
            title: 'Hormone replacement therapy'
          },
          {
            id: 17,
            type: 3,
            title: 'Ozone herapy'
          }
        ],
      },
      {
        title: 'Sep',
        plans: [
          {
            id: 18,
            type: 3,
            title: 'Ozone herapy'
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

    deletePlan(state, id) {
      state.monthsList.map((item) => {
        item.plans.map((plan, index) => {
          if (plan.id === id) {
            item.plans.splice(index, 1)
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
  },
};
