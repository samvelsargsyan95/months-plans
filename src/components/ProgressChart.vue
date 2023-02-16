<template>
  <div class="position-relative">
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
      ref="chart"
    />

    <div class="donut-inner position-absolute">
      <span>{{ showingPercents }}%</span>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
import GeneralMixin from "@/mixins/GeneralMixin";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "ProgressChart",
  components: {
    Doughnut,
  },

  mixins: [GeneralMixin],

  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    chartData() {
      return {
        datasets: [
          {
            // book-now, booked, completed, grey
            backgroundColor: ["#70baff", "#4b4bde", "#5fb05f", "#efededd4"],
            // backgroundColor: (ctx) => {
            //   const canvas = ctx.chart.ctx;
            //   const gradient = canvas.createLinearGradient(0,0,0,500);

            //   gradient.addColorStop(.3, '#70baff');
            //   gradient.addColorStop(.4, '#4b4bde');
            //   gradient.addColorStop(.5, '#5fb05f');
            //   gradient.addColorStop(1, '#efededd4');

            //   return gradient;
            // },
            data: this.chartDataList,
          },
        ],
      };
    },

    chartDataList() {
      let dataList = [],
        bookNow = 0,
        booked = 0,
        completed = 0,
        remainingPercents = 0;

      if (this.allPlans.length) {
        this.allPlans.map((item) => {
          if (item.type === 1) {
            // Book Now
            bookNow += 1;
          }

          if (item.type === 2) {
            // Booked
            booked += 1;
          }

          if (item.type === 3) {
            // Completed
            completed += 1;
          }
        });

        if (bookNow + booked + completed !== this.arbitraryNumber) {
          let x = this.arbitraryNumber - (bookNow + booked + completed);

          // tvery kamayakan tvi tokosayin haraberutyamb
          bookNow = Math.round((bookNow / this.arbitraryNumber) * 100);
          booked = Math.round((booked / this.arbitraryNumber) * 100);
          completed = Math.round((completed / this.arbitraryNumber) * 100);
          remainingPercents = Math.round((x / this.arbitraryNumber) * 100);
        }

        dataList = [bookNow, booked, completed, remainingPercents];
      }
      return dataList;
    },

    showingPercents() {
      let bookNow = 0,
        booked = 0,
        completed = 0;

      if (this.allPlans.length) {
        this.allPlans.map((item) => {
          if (item.type === 1) {
            // Book Now
            bookNow += 1;
          }

          if (item.type === 2) {
            // Booked
            booked += 1;
          }

          if (item.type === 3) {
            // Completed
            completed += 1;
          }
        });
      }

      return Math.round((bookNow + booked + completed) / this.arbitraryNumber * 100);
    },
  },

  data() {
    return {
      chartOptions: {
        responsive: true,
        cutout: window.innerWidth === 1920 ? 140 : 90,
        borderWidth: 0,
        width: this.width,
        height: this.height
      },
      arbitraryNumber: 30, // kamayakan tiv
    };
  },

};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles";

.donut-inner {
  top: 41%;
  left: 36%;
  & span {
    font-size: 40px;
  }
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}
</style>
