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
    dialogs: false,
    adminui: '',
    iduser: {},
    user: {},
    menu: [],
    cinema: [
    ],
    cart: [],
    iddeletemenu: '',
    idupdatemenu: '',
    orders: [],
    foodsInCart: [],
    allOrder: {
      menu_list: [],
      total_price: 0
    }
  },
  getters: {
    cinema(state) {
      return state.cinema
    },
    iduser(state) {
      return state.iduser
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
    dialogs(state) {
      return state.dialogs
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
    addtocart(state) {
      return state.cart
    },
    iddeletemenu(state) {
      return state.iddeletemenu
    },
    idupdatemenu(state) {
      return state.idupdatemenu
    },
    orders(state) {
      return state.orders
    },
    foodsInCart(state) {
      return state.foodsInCart
    },
    allOrder(state) {
      return state.allOrder
    }
  },
  mutations: {
    setReserveSeat(state, value) {
      state.cinema = value
    },
    setIduser(state, value) {
      state.iduser = value
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
    setDialogs(state, value) {
      state.dialogs = value
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
    addTocart(state, value) {
      state.cart.push(value)
    },
    setIddeletemenu(state, value) {
      state.iddeletemenu = value
    },
    setIdupdatemenu(state, value) {
      state.idupdatemenu = value
    },
    addOrder(state, value) {
      state.orders.push(value)
    },
    setAddToCart(state, value) {
      state.foodsInCart = value
    },
    setAllOrder(state, value) {
      state.allOrder = value
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
    setIduserAction(context, value) {
      context.commit('setIduser', value)
    },
    setDialogConfirmAction(context, value) {
      context.commit('setDialogcf', value)
    },
    setDialoguCancleAction(context, value) {
      context.commit('setDialogu', value)
    },
    setDialogsAction(context, value) {
      context.commit('setDialogs', value)
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
    },
    setIddeletemenuAction(context, value) {
      context.commit('setIddeletemenu', value)
    },
    setIdupdatemenuAction(context, value) {
      context.commit('setIdupdatemenu', value)
    },
    AddtocartAction(context, value) {
      context.commit('addTocart', value)
    },
    setAddToCartAction(context, value) {
      context.commit('setAddToCart', value)
    },
    setAllOrderAction(context, value) {
      context.commit('setAllOrder', value)
    }
  },
  modules: {
  }
})
