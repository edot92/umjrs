<template lang="html">
<div id="Recordsetting" class="content">
  <div class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-4" for="pwd">No BPJS:</label>
            <div class="col-sm-4">
              <v-select :value.sync="selected" :options="options" :onChange="selectChange"></v-select>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-sm-4" for="pwd">Nama Pasien:</label>
            <div class="col-sm-4">
              <input disabled type="text" class="form-control" v-model="recordform.nama_lengkap" placeholder="???">
            </div>
        </div>
    <hr>
          <div class="form-group">
              <label class="control-label col-sm-4" for="pwd">Temperature Dan BPM:</label>
              <div class="col-sm-4">
                <toggle-button :width="100" :color="{checked: '#42b983', unchecked: '#dd4b39'}" @change="onChangeEventHandler" :value="true" :labels="{checked: 'RECORD START', unchecked: 'RECORD STOP'}"/>
              </div>
          </div>
      <hr>
            <hr>
            <div class="form-group">
              <div class="col-sm-8 col-sm-offset-1"><button class="btn btn-primary btn-block" v-on:click="simpanRecord">Simpan </button>
              </div>
            </div>
    </div>
</div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: {vSelect},
  data () {
    return {
      selected: null,
      options: ['foo', 'bar', 'baz'],
      isActive: false,
      recordform: {
        no_bpjs: '',
        nama_lengkap: '',
        temperature: '',
        status: ''
      }
    }
  },
  mounted () {
    this.getListPasien()
  },
  methods: {
    simpanRecord: function (param) {
      if (this.recordform.nama_lengkap === '' ||
      this.recordform.no_bpjs === '') {
        swal(
            'info',
            'pilih pasien dengan memilih no bpjs no bpjs',
            'error'
          )
        return false
      }
      var thisVue = this
      thisVue.axios({
        method: 'post',
        url: 'record/setrecordactive',
        data: {
          status: thisVue.recordform.status,
          no_bpjs: thisVue.recordform.no_bpjs,
          nama_lengkap: thisVue.recordform.nama_lengkap,
          created_at: '',
          update_at: ''
        }
      })
      .then(function (response) {
        swal(
            'info',
            response.data.message,
            'success'
          )
      }).catch(function (error) {
        if (typeof error.response === 'undefined') {
          swal(
              'info',
              'network errors',
              'error'
            )
          return
        }
        swal(
            'info',
            error.response.data.error,
            'error'
          )
      })
    },
    selectChange: function (param) {
      for (var i = 0; i < window.listpasien.length; i++) {
        if (window.listpasien[i].no_bpjs === param) {
          this.recordform.no_bpjs = window.listpasien[i].no_bpjs
          this.recordform.nama_lengkap = window.listpasien[i].nama_lengkap
        }
      }
    },
    onChangeEventHandler: function () {
      this.isActive = !this.isActive
      if (this.isActive === false) {
        this.recordform.status = 'active'
      } else {
        this.recordform.status = ''
      }
      console.log(this.recordform.status)
    },
    getListPasien: function () {
      var thisVue = this
      thisVue.axios({
        method: 'get',
        url: 'record/getallpasien'
      })
      .then(function (response) {
        window.listpasien = response.data.data
        thisVue.options = []
        for (var i = 0; i < window.listpasien.length; i++) {
          thisVue.options[i] = window.listpasien[i].no_bpjs
        }
      }).catch(function (error) {
        if (typeof error.response === 'undefined') {
          swal(
              'info',
              'network errors',
              'error'
            )
          return
        }
        swal(
            'info',
            error.response.data.error,
            'error'
          )
      })
    }
  }
}
</script>

<style lang="css">
</style>
