<template>
  <div class="modal">
    <div class="moadl-content">
      <p>{{ this.modalMessage }}</p>
      <v-btn @click="closeModal">Close</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modalMessage'],
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    p {
      text-align: center;
    }

    v-btn {
      align-self: center;
    }
  }
}
</style>
