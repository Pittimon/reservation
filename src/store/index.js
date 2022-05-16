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
    user: {},
    menu: [],
    cinema: [
      {
        id: 1, seat: 'A1', row: 'A', col: 1, price: 240, reserved: false, sold: true
      },
      {
        id: 2, seat: 'A2', row: 'A', col: 2, price: 240, reserved: false, sold: false
      },
      {
        id: 3, seat: 'A3', row: 'A', col: 3, price: 240, reserved: false, sold: false
      },
      {
        id: 4, seat: 'A4', row: 'A', col: 4, price: 240, reserved: true, sold: false
      },
      {
        id: 5, seat: 'A5', row: 'A', col: 5, price: 240, reserved: false, sold: false
      },
      {
        id: 6, seat: 'A6', row: 'A', col: 6, price: 240, reserved: false, sold: false
      },
      {
        id: 7, seat: 'B1', row: 'B', col: 1, price: 220, reserved: false, sold: false
      },
      {
        id: 8, seat: 'B2', row: 'B', col: 2, price: 220, reserved: false, sold: false
      },
      {
        id: 9, seat: 'B3', row: 'B', col: 3, price: 220, reserved: false, sold: false
      },
      {
        id: 10, seat: 'B4', row: 'B', col: 4, price: 220, reserved: false, sold: false
      },
      {
        id: 11, seat: 'B5', row: 'B', col: 5, price: 220, reserved: false, sold: false
      },
      {
        id: 12, seat: 'B6', row: 'B', col: 6, price: 220, reserved: false, sold: false
      },
      {
        id: 1, seat: 'C1', row: 'C', col: 1, price: 220, reserved: false, sold: false
      },
      {
        id: 2, seat: 'C2', row: 'C', col: 2, price: 220, reserved: false, sold: false
      },
      {
        id: 3, seat: 'C3', row: 'C', col: 3, price: 220, reserved: false, sold: false
      },
      {
        id: 4, seat: 'C4', row: 'C', col: 4, price: 220, reserved: false, sold: false
      },
      {
        id: 5, seat: 'C5', row: 'C', col: 5, price: 220, reserved: false, sold: false
      },
      {
        id: 6, seat: 'C6', row: 'C', col: 6, price: 220, reserved: false, sold: false
      },
      {
        id: 7, seat: 'D1', row: 'D', col: 1, price: 220, reserved: false, sold: false
      },
      {
        id: 8, seat: 'D2', row: 'D', col: 2, price: 220, reserved: false, sold: false
      },
      {
        id: 9, seat: 'D3', row: 'D', col: 3, price: 220, reserved: false, sold: false
      },
      {
        id: 10, seat: 'D4', row: 'D', col: 4, price: 220, reserved: false, sold: false
      },
      {
        id: 11, seat: 'D5', row: 'D', col: 5, price: 220, reserved: false, sold: false
      },
      {
        id: 12, seat: 'D6', row: 'D', col: 6, price: 220, reserved: false, sold: false
      }
    ]
  },
  getters: {
    cinema(state) {
      return state.cinema
    },
    dialogc(state) {
      return state.dialogc
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
    }
  },
  mutations: {
    setReserveSeat(state, value) {
      state.cinema = value
    },
    setProfile(state, value) {
      state.profile = value
    },
    setDialogc(state, value) {
      state.dialogc = value
    },
    setSeatobj(state, value) {
      state.seatobj = value
    },
    setUser(state, value) {
      state.user = value
    },
    setMenu(state, value) {
      state.menu = value
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
    setPropObjAction(context, value) {
      context.commit('setSeatobj', value)
    },
    setUserAction(context, value) {
      context.commit('setUser', value)
    },
    setMenuAction(context, value) {
      context.commit('setMenu', value)
    }
  },
  modules: {
  }
})
