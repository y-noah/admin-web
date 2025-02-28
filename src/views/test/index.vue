<template>
  <el-card>
    <el-form>
      <el-form-item>
        <el-button type="primary" style="margin-left: 15px" @click="select">查询</el-button>
        <el-button type="success" style="margin-left: 45px">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="number"
            label="编号"
            align="center"
          />
        </el-table>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
  },
  methods: {
    select() {
      this.$store.dispatch('select').then(response => {
        if (response.code === 200) {
          console.log(response)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
