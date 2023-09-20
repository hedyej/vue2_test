<template>
  <div v-if="showData" class="wrapper">
    <div  class="card" v-for="item in filterShowData" :key="item.UID">
      <h3>{{item.title}}</h3>
      <div class="d-flex">
        <p>
          <span>{{item.startDate}} ~ {{item.endDate}}</span>
        </p>
        <a v-if="item.webSales" :href="item.webSales" target="_blank" class="primary-btn">
          連結
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TestTwoView',
  computed: {
    ...mapState(['showData']),
    filterShowData(){
      return this.showData.data.filter((item)=>{
        return item.masterUnit.includes("國立歷史博物館")
      })
    },
  },
  methods: {
    ...mapActions(['getShowData'])
  },
  async created() {
    await this.getShowData()
  },
}
</script>

<style scoped lang="scss">
.card{
  max-width: 700px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px auto;

  h3{
    color: #4d4d4d;
    text-align: left;
  }
}

.primary-btn{
  border-color: #ddd;
  border-radius: 4px;
  background-color: #5f9384;
  color: white;
  padding: 4px 8px;  
  text-decoration: none;
}

.d-flex{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.wrapper{
  padding: 10px;
}

@media screen and (max-width: 400px) {
    .d-flex{
      flex-direction: column;
      justify-content:flex-start;
      gap:10px;
    }

    .card {
      h3{
        margin-bottom: 10px;
        text-align: center;
      }
    }
  }
</style>