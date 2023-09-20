import axios from "axios";
export const namespaced = true

export const state = {
  table_data: [{
    id: 1,
    text: "Hello world",
    url: "https://www.google.com",
  },
  {
    id: 2,
    text: "iphone",
    url: "https://www.apple.com/tw/",
  },
  {
    id: 3,
    text: "andriod",
    url: "https://www.android.com/intl/zh-TW_tw/"
  }],
  showData: []
}

const mutations = {
  setShowData(state,payLoad) {
    state.showData = payLoad
  }
}

const actions = {
  async getShowData({commit}) {
    const artApi ="https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
    try {
      const result = await axios.get(artApi)
      commit("setShowData",result)
    } catch (error) {
      alert("應用程式錯誤")
    }
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations,
}
