import { lightTheme } from 'naive-ui'

// default modifications
lightTheme.common.primaryColor = '#0CCE6B' /// 0CCE6B 0CCE6B
lightTheme.common.primaryColorHover = '#0CCE6B'
lightTheme.common.successColor = '#00B2CA' /// F7E733 00B2CA
lightTheme.common.warningColor = '#F7F7F9'
lightTheme.common.infoColor = '#000000'

const state = {
  theme: lightTheme,
}

const getters = {
  getTheme(state) {
    return state.theme
  },
}

const actions = {
  getLesson({ commit }, theme) {
    commit("saveTheme", theme)
  },
}

const mutations = {
  saveTheme(state, theme) {
    state.theme = theme
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
