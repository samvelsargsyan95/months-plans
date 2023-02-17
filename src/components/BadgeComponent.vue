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
    <span v-if="!showInput" class="badge__title">{{ title }}</span>
    <input
      v-else
      v-model="badgeTitle"
      @input="$emit('edit-plan', badgeTitle)"
      @blur="updateInput"
      class="badge__input p-1 border-5"
      type="text"
    />

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
          class="badge__actions position-absolute"
        >
          <actions-list
            :open-actions="openActions"
            @edit-plan="showEditInp"
            @delete-plan="$emit('delete-plan')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionsList from "@/components/ActionsList";

export default {
  name: "BadgeComponent",
  components: {
    ActionsList,
  },

  data() {
    return {
      openActions: false,
      showInput: false,
      badgeTitle: "",
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

  methods: {
    showEditInp() {
      this.showInput = true;
      this.badgeTitle = this.title;
    },

    updateInput() {
      this.$emit('edit-plan', this.badgeTitle)
      this.showInput = false;
    }
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

  &__actions {
    top: -10px;
    left: -67px;
  }

  &__input {
    border-radius: 5px;
    border: unset;
    box-shadow: 2px 2px 4px grey;
    width: 40%;
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

.border-5 {
  border-radius: 5px;
}
</style>