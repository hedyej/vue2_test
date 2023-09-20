<template>
  <div> 
    <TestTable :tableHeader="tableHeader" :tableData="tableData"/>
  </div>
</template>

<script>
import TestTable from '@/components/TestTable.vue'
import { mapState } from 'vuex'
import { table_header } from '@/table';

export default {
  name: 'TestOneView',
  components: {
    TestTable
  },
  data() {
    return {
      tableHeader: table_header,
      tableData: []
    }
  },
  computed: {
    ...mapState(["table_data"])
  },
  created() {
    this.tableData = this.table_data
  }
}
</script>
  