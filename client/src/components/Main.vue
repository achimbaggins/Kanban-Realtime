<template lang="html">
  <div class="container">
    <div class="row">
        <Panelatas></Panelatas>
    </div>
    <div class="row">

      <!-- backlog -->
      <div class="col-md-3">
        <h3>backlog</h3>
        <div class="panel panel-primary text-left" v-for="(data, index) in allTodos" v-if="data.status === 1">
          <div class="panel-heading">
            <h3 class="panel-title"><b>{{data.task}}</b></h3>
          </div>
          <div class="panel-body">
            dikerjakan oleh: <b>{{data.assignTo}}</b><br>
            {{data.des}}<br>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="destroy(index)" name="button">Del</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="next(data, index)" name="button">Masuk Proses Koding</button>
          </div>
        </div>
      </div>
      <!-- backlog -->
      <!-- proses koding -->
      <div class="col-md-3">
        <h3>Proses Koding</h3>
        <div class="panel panel-info text-left" v-for="(data, index) in allTodos" v-if="data.status === 2">
          <div class="panel-heading">
            <h3 class="panel-title"><b>{{data.task}}</b></h3>
          </div>
          <div class="panel-body">
            dikerjakan oleh: <b>{{data.assignTo}}</b><br>
            {{data.des}}<br>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="destroy(index)" name="button">Del</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="back(data, index)" name="button">Kembali ke Backlog</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="next(data, index)" name="button">Masuk Testing Area</button>
          </div>
        </div>
      </div>
      <!-- proses koding -->
      <!-- testing koding -->
      <div class="col-md-3">
        <h3>Testing Area</h3>
        <div class="panel panel-warning text-left" v-for="(data, index) in allTodos" v-if="data.status === 3">
          <div class="panel-heading">
            <h3 class="panel-title"><b>{{data.task}}</b></h3>
          </div>
          <div class="panel-body">
            dikerjakan oleh: <b>{{data.assignTo}}</b><br>
            {{data.des}}<br>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="destroy(index)" name="button">Del</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="back(data, index)" name="button">Kembali ke Proses Koding</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="next(data, index)" name="button">Tandai Selesai</button>
          </div>
        </div>
      </div>
      <!-- testing koding -->
      <!-- final -->
      <div class="col-md-3">
        <h3>Testing Area</h3>
        <div class="panel panel-danger text-left" v-for="(data, index) in allTodos" v-if="data.status === 4">
          <div class="panel-heading">
            <h3 class="panel-title"><b>{{data.task}}</b></h3>
          </div>
          <div class="panel-body">
            dikerjakan oleh: <b>{{data.assignTo}}</b><br>
            {{data.des}}<br>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="destroy(index)" name="button">Del</button>
            <button type="button" class="btn btn-info" style="border-radius:50px;" @click="back(data, index)" name="button">Kembali ke Proses Koding</button>
          </div>
        </div>
      </div>
      <!--final -->


    </div>
  </div>
</template>

<script>
import Panelatas from '@/components/Panelatas'
export default {
  data(){
    return {
      allTodos: null
    }
  },
  methods: {
    getAllTodos(){
      this.$dbFire.on('value', data => {
        this.allTodos = data.val()
      })
    },
    destroy (index) {
      if(window.confirm('Yakin mau dihapus?')){
        this.$dbFire.child(index).remove()
      }
    },
    next(data, index) {
      if(window.confirm('Yakin mau ganti status?')){
        this.$dbFire.child(index).update({
          status: data.status + 1
        })
      }
    },
    back(data, index) {
      if(window.confirm('Yakin mau ganti status?')){
        this.$dbFire.child(index).update({
          status: data.status - 1
        })
      }
    }
  },
  components: {
    Panelatas
    // Todolist,
    // Sedangcoding,
    // Testing,
    // Selesai
  },
  mounted () {
    // this.$store.commit('getAllTodos')
    this.getAllTodos()
    console.log('data todos', this.allTodos);
  }
}
</script>
