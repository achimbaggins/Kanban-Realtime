<template>
  <div class="col-md-3">
    <h2 class="panel-title"><b>Backlog</b></h2>
    <div class="panel panel-primary text-left" v-for="(data, index) in backlog" :key="index">
      <div class="panel-heading">
        {{data.task}}
        <button class="text-right btn btn-default" style="border-radius:50px; margin-left:5px;">Point : {{data.point}}</button>
        <span class="text-right btn btn-default" style="border-radius:50px;" @click="destroy(index)">Del</span>
      </div>
      <div class="panel-body">
        {{data.des}}
      </div>
      <div class="panel-body">
        Dikerjakan Oleh : {{data.assignTo}}
        <button class="text-right btn btn-success" style="border-radius:50px;" @click="sedangCoding(data)">Masukkan ke Proses Coding</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    backlog () {
      // console.log('getter', this.$store.getters.backlog)
       return this.$store.getters.backlog
    }
  },
  methods: {
    destroy(id){
      // console.log('id masuk', id);
      if(window.confirm('Yakin mau dihapus?')){
        // this.$store.dispatch('destroy', id)
      }
    },
    sedangCoding(data){
      if(window.confirm('Yakin mau dimasukkan ke proses coding?')){
        // this.$store.dispatch('sedangCoding', data)
      }
    }
  }
}
</script>
