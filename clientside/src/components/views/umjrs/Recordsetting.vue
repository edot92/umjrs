<template lang="html">
<div id="Recordsetting" class="content">
  <div class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-4" for="pwd">No BPJS:</label>
            <div class="col-sm-4">
              <v-select :value.sync="selected" :options="options"></v-select>
            </div>

        </div>

        <div class="form-group">
            <label class="control-label col-sm-4" for="pwd">Nama Pasien:</label>
            <div class="col-sm-4">
              <input disabled type="text" class="form-control" v-model="realtime_sensor.temperature" placeholder="???">
            </div>
        </div>

    <hr>
          <div class="form-group">
              <label class="control-label col-sm-4" for="pwd">Temperature:</label>
              <div class="col-sm-4">
                  <input disabled type="text" class="form-control" v-model="realtime_sensor.temperature" placeholder="???">
              </div>
              <div class="col-sm-2">
                <toggle-button :width="100" :color="{checked: '#42b983', unchecked: '#dd4b39'}" @change="onChangeEventHandler" :value="true" :labels="{checked: 'RECORD START', unchecked: 'RECORD STOP'}"/>
              </div>
          </div>
      <hr>
            <div class="form-group">
                <label class="control-label col-sm-4" for="pwd">BPM :</label>
                <div class="col-sm-4">
                    <input disabled type="text" class="form-control" v-model="realtime_sensor.bpm"  placeholder="???">
                </div>
                <div class="col-sm-2">
                  <toggle-button :width="100" :color="{checked: '#42b983', unchecked: '#dd4b39'}" @change="onChangeEventHandler" :value="true" :labels="{checked: 'RECORD START', unchecked: 'RECORD STOP'}"/>
                </div>
            </div>
            <hr>
            <div class="form-group">
              <div class="col-sm-8 col-sm-offset-1"><button class="btn btn-primary btn-block">Simpan </button>
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
      realtime_sensor: {
        namapasien: '',
        temperature: '',
        bpm: '',
        last_update: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
