<template>
  <div
    class="
      badge
      d-flex
      justify-between
      align-center
      grey-border
      radius-10
      px-1
      py-2
    "
  >
    <span class="badge__title">{{ title }}</span>

    <div class="d-flex align-center justify-between badge__right-part">
      <div
        :class="{
          complated: badgeType === 3,
          booked: badgeType === 2,
          'book-now': badgeType === 1,
        }"
        class="d-flex align-center"
      >
        <span :class="iconType" class="mdi me-1 icon"></span>
        <span class="status">{{ status }}</span>
      </div>

      <div class="position-relative">
        <span
          @click.stop="openActions = !openActions"
          @mouseover="openActions = true"
          class="mdi mdi-dots-horizontal cursor-pointer icon"
        ></span>

        <div
          v-if="openActions"
          @mouseleave="openActions = false"
          @click="$emit('delete-plan')"
          class="
            cursor-pointer
            badge__delete
            position-absolute
            grey-border
            radius-10
            px-4
            py-1
          "
        >
          Delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "BadgeComponent",

  data() {
    return {
      openActions: false,
    };
  },

  props: {
    title: {
      type: String,
      default: () => null,
    },
    badgeType: {
      type: Number,
      default: () => null,
    },
  },

  computed: {
    iconType() {
      let icon = "";

      switch (this.badgeType) {
        case 1: //Book Now
          icon = "mdi-calendar-blank-outline";
          break;
        case 2: //Booked
          icon = "mdi-calendar-month-outline";
          break;
        case 3: //Completed
          icon = "mdi-check-circle-outline";
          break;
      }

      return icon;
    },

    status() {
      let statusName = "";

      switch (this.badgeType) {
        case 1:
          statusName = "Book Now";
          break;
        case 2:
          statusName = "Booked";
          break;
        case 3:
          statusName = "Complated";
          break;
      }

      return statusName;
    },
  },

  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles";

.complated {
  color: #5fb05f;
}

.booked {
  color: #4b4bde;
}

.book-now {
  color: #70baff;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.badge {
  &__right-part {
    width: 20%;
  }

  &__delete {
    top: -10px;
    left: -67px;
    background: white;
    transition: all 0.3s;

    &:hover {
      background: rgb(186, 210, 247);
      color: white;
    }
  }
}

.icon {
  font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>