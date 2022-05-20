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
      {
        id: 1, seat: 'A1', row: 'A', col: 1, reserved: false
      },
      {
        id: 2, seat: 'A2', row: 'A', col: 2, reserved: false
      },
      {
        id: 3, seat: 'A3', row: 'A', col: 3, reserved: false
      },
      {
        id: 4, seat: 'A4', row: 'A', col: 4, reserved: true
      },
      {
        id: 5, seat: 'A5', row: 'A', col: 5, reserved: false
      },
      {
        id: 6, seat: 'A6', row: 'A', col: 6, reserved: false
      },
      {
        id: 7, seat: 'B1', row: 'B', col: 1, reserved: false
      },
      {
        id: 8, seat: 'B2', row: 'B', col: 2, reserved: false
      },
      {
        id: 9, seat: 'B3', row: 'B', col: 3, reserved: false
      },
      {
        id: 10, seat: 'B4', row: 'B', col: 4, reserved: false
      },
      {
        id: 11, seat: 'B5', row: 'B', col: 5, reserved: false
      },
      {
        id: 12, seat: 'B6', row: 'B', col: 6, reserved: false
      },
      {
        id: 13, seat: 'C1', row: 'C', col: 1, reserved: false
      },
      {
        id: 14, seat: 'C2', row: 'C', col: 2, reserved: false
      },
      {
        id: 15, seat: 'C3', row: 'C', col: 3, reserved: false
      },
      {
        id: 16, seat: 'C4', row: 'C', col: 4, reserved: false
      },
      {
        id: 17, seat: 'C5', row: 'C', col: 5, reserved: false
      },
      {
        id: 18, seat: 'C6', row: 'C', col: 6, reserved: false
      },
      {
        id: 19, seat: 'D1', row: 'D', col: 1, reserved: false
      },
      {
        id: 20, seat: 'D2', row: 'D', col: 2, reserved: false
      },
      {
        id: 21, seat: 'D3', row: 'D', col: 3, reserved: false
      },
      {
        id: 22, seat: 'D4', row: 'D', col: 4, reserved: false
      },
      {
        id: 23, seat: 'D5', row: 'D', col: 5, reserved: false
      },
      {
        id: 24, seat: 'D6', row: 'D', col: 6, reserved: false
      }
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
