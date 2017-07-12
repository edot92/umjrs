<template lang="html">
<div id="riwayatpasien" class="content">

  <form action="" method="#" class="form-horizontal" >
      <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">no_bpjs </label>
          <div class="col-sm-10">
              <input v-model="param_riwayat.no_bpjs" type="text" class="form-control" required>
          </div>
      </div>

      <div class="form-group">
          <div class="col-sm-10 col-sm-offset-2">
              <button @click.prevent="showHistoryByDate()" class="btn btn-primary btn-block">Tampilkan Data</button>
          </div>
      </div>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      param_riwayat: {
        no_bpjs: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
