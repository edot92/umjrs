<template lang="html">
<div id="riwayatpasien" class="content">

  <form action="" method="#" class="form-horizontal" >
      <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">no_bpjs </label>
          <div class="col-sm-10">
              <input v-model="param_riwayat.no_bpjs" type="text" class="form-control" required>
          </div>
      </div>
      <h5>{{param_riwayat.no_bpjs }}</h5>
      <div class="form-group">
          <div class="col-sm-10 col-sm-offset-2">
              <button @click.prevent="showHistoryByDate()" class="btn btn-primary btn-block">Tampilkan Data</button>
          </div>
      </div>
  </form>
  <div class="row">
      <v-client-table :data="tabelriwayat.data" :columns="tabelriwayat.columns" :options="tabelriwayat.options"></v-client-table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      param_riwayat: {
        no_bpjs: ''
      },
      tabelriwayat: {
        columns: ['id', 'name', 'age'],
        data: [
          {id: 1, name: 'John', age: '20'},
          {id: 2, name: 'Jane', age: '24'},
          {id: 3, name: 'Susan', age: '16'},
          {id: 4, name: 'Chris', age: '55'},
          {id: 5, name: 'Dan', age: '40'}
        ],
        options: {
// see the options API
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
