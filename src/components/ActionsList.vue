<template>
  <div class="actions d-flex flex-column overflow-hidden grey-border radius-10">
    <div
      v-for="(item, index) of actionsList"
      @click="item === 'Edit' ? $emit('edit-plan') : $emit('delete-plan')"
      :class="{
        actions__edit: item === 'Edit',
        actions__delete: item === 'Delete',
      }"
      :key="index"
      class="cursor-pointer actions__delete px-4 py-1"
    >
      {{ item === "Edit" ? "Edit" : "Delete" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionsList",
  props: {
    openActions: {
      type: Boolean,
      defaul: () => false,
    },
  },
  data() {
    return {
      actionsList: ["Edit", "Delete"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles";

.actions {
  background: white;
  transition: all 0.3s;

  &__delete {
    &:hover {
      background: rgb(248, 135, 135);
      color: white;
    }
  }

  &__edit {
    &:hover {
      background: rgb(186, 210, 247);
      color: white;
    }
  }
}

.overflow-hidden {
  overflow: hidden;
}
</style>