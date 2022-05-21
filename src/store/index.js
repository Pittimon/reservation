import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      username: ''
    },
    seatobj: {
    },
    dialogc: false,
    dialogu: false,
    dialogd: false,
    dialogcf: false,
    adminui: '',
    user: {},
    menu: [],
    cinema: [
    ],
    orders: []
  },
  getters: {
    cinema(state) {
      return state.cinema
    },
    dialogc(state) {
      return state.dialogc
    },
    dialogcf(state) {
      return state.dialogcf
    },
    dialogu(state) {
      return state.dialogu
    },
    dialogd(state) {
      return state.dialogd
    },
    profile(state) {
      return state.profile
    },
    seatobj(state) {
      return state.seatobj
    },
    user(state) {
      return state.user
    },
    menu(state) {
      return state.menu
    },
    adminui(state) {
      return state.adminui
    },
    orders(state) {
      return state.orders
    }
  },
  mutations: {
    setReserveSeat(state, value) {
      state.cinema = value
    },
    setCinema(state, value) {
      state.cinema = value
    },
    setProfile(state, value) {
      state.profile = value
    },
    setDialogc(state, value) {
      state.dialogc = value
    },
    setDialogcf(state, value) {
      state.dialogcf = value
    },
    setDialogu(state, value) {
      state.dialogu = value
    },
    setDialogd(state, value) {
      state.dialogd = value
    },
    setSeatobj(state, value) {
      state.seatobj = value
    },
    setUser(state, value) {
      state.user = value
    },
    setMenu(state, value) {
      state.menu = value
    },
    setAdminui(state, value) {
      state.adminui = value
    },
    addOrder(state, value) {
      state.orders.push(value)
    }
  },
  actions: {
    reserveSeatAction(context, value) {
      // console.log(this.getters.cinema)
      const cinema = this.getters.cinema.map((obj) => {
        return (obj.seat === value.seat ? { ...obj, reserved: true } : obj)
      })
      // console.log(cinema)
      context.commit('setReserveSeat', cinema)
    },
    cancelReserveSeatAction(context, value) {
      const cinema = this.getters.cinema.map((obj) => {
        return (obj.seat === value.seat ? { ...obj, reserved: false } : obj)
      })
      context.commit('setReserveSeat', cinema)
    },
    soldSeatAction(context, value) {
      const cinema = this.getters.cinema.map((obj) => {
        return (obj.seat === value.seat ? { ...obj, sold: true } : obj)
      })
      context.commit('setReserveSeat', cinema)
    },
    setProfileAction(context, value) {
      context.commit('setProfile', value)
    },
    cancleSoldSeatAction(context, value) {
      const cinema = this.getters.cinema.map((obj) => {
        return (obj.seat === value.seat ? { ...obj, sold: false } : obj)
      })
      context.commit('setReserveSeat', cinema)
    },
    setDialogCancleAction(context, value) {
      context.commit('setDialogc', value)
    },
    setDialogConfirmAction(context, value) {
      context.commit('setDialogcf', value)
    },
    setDialoguCancleAction(context, value) {
      context.commit('setDialogu', value)
    },
    setDialogdCancleAction(context, value) {
      context.commit('setDialogd', value)
    },
    setPropObjAction(context, value) {
      context.commit('setSeatobj', value)
    },
    setUserAction(context, value) {
      context.commit('setUser', value)
    },
    setMenuAction(context, value) {
      context.commit('setMenu', value)
    },
    setAdminuiAction(context, value) {
      context.commit('setAdminui', value)
    },
    setCinemaAction(context, value) {
      context.commit('setCinema', value)
    }
  },
  modules: {
  }
})
