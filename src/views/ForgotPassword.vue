<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <v-icon class="icon" style="left:10px;">mdi-email</v-icon>
            <email class="icon" />
          </div>
        </div>
        <v-btn rounded depressed>Reset</v-btn>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>
<script>
import email from '../assets/Icon/email.svg'
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: '',
      loading: null
    }
  },
  components: {
    email,
    Modal,
    Loading
  },
  Methods: {
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
