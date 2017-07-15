<template lang="html">
  <div id="Realtimesensor" class="content">
    <h5>Last Updated:  {{lastupdated}}</h5>
    <br>
        <div class="row">
          <div class="col-md-6">
            <div id="gauge1">

            </div>
            </div>
            <div class="col-md-6">
              <div id="gauge2">

              </div>
              </div>
        </div>
</div>
</template>

<script>
function initGauge (vueThis) {
  vueThis.gauge1 = $('#gauge1').jqxGauge({
    ranges: [{ startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                            { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                            { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                            { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }],
    ticksMinor: { interval: 5, size: '5%' },
    ticksMajor: { interval: 10, size: '9%' },
    value: 0,
    colorScheme: 'scheme05',
    animationDuration: 1200,
    caption: {
      value: 'Temperature',
      position: 'bottom',
      offset: [0, 10],
      visible: true
    }
  })
  vueThis.gauge1 = $('#gauge2').jqxGauge({
    ranges: [
          { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
          { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
          { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
          { startValue: 165, endValue: 500, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
    ],
    ticksMinor: { interval: 5, size: '5%' },
    ticksMajor: { interval: 10, size: '9%' },
    value: 0,
    colorScheme: 'scheme02',
    animationDuration: 1200,
    caption: {
      value: 'BPM',
      position: 'bottom',
      offset: [0, 10],
      visible: true
    },
    max: 400
  })
}
export default {
  data () {
    return {
      gauge1: '',
      lastupdated: '',
      gauge2: '',
      realtime_sensor: {
        namapasien: '',
        temperature: '',
        bpm: '',
        last_update: ''
      }
    }
  },
  mounted () {
    // this.realtimelast()
    // setInterval(this.realtimelast, 1000)
    // document.addEventListener('DOMContentLoaded', function () {
    initGauge(this)
    // })
    this.lastupdated = window.moment().format('hh:mm:ss DD-MM-YYYY')
  },

  methods: {
    realtimelast: function () {
      var thisVue = this
      thisVue.axios({
        method: 'get',
        url: '/device/realtimelast'
      })
        .then(function (response) {
          $('#gauge1').jqxGauge({
            value: parseInt(response.data.data.temperature, 10)
          })
          $('#gauge2').jqxGauge({
            value: parseInt(response.data.data.bpm, 10)
          })
          thisVue.realtime_sensor.temperature = response.data.data.temperature
          thisVue.realtime_sensor.bpm = response.data.data.bpm
          thisVue.realtime_sensor.last_update = response.data.data.created_at
        }).catch(function (error) {
          swal(
              'info',
              'server error',
              'error'
            )
          console.log(error)
        })
    }
  }

}

</script>

<style lang="css">
hr {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 1px;
}
</style>
