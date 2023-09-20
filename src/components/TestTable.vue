<template>

<div>
  <table>
    <thead>
      <tr>
        <th v-for="title in tableHeader" :key="title.value">
        {{ title.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="content in tableData" :key="content.id">
        <td>
          {{ content.id }}
        </td>
        <td>
          {{ content.text }}
        </td>
        <td>
          <a :href="content.url" target="_blank">連結</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
    
<script>
export default {
  name: "TestTable",
  props:{
    tableHeader: {
        type: Array ,
        required: true
    },
    tableData : {
        type: Array,
        required: true
    },
  }
};
</script>
    
<style lang="sass" scoped>
table, th, td
  border: 1px solid black
  border-collapse: collapse
</style>