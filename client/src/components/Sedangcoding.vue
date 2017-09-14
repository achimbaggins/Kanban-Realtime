<template>
  <div class="col-md-3">
    <h2 class="panel-title"><b>Sedang Coding</b></h2>
    <div class="panel panel-warning text-left" v-for="(data, index) in sedangCoding" :key="index">
      <div class="panel-heading">
        {{data.task}}
        <button class="text-right btn btn-default" style="border-radius:50px; margin-left:50px;">Point : {{data.point}}</button>
        <span class="glyphicon glyphicon-trash text-right btn btn-default" style="border-radius:50px;"></span>
      </div>
      <div class="panel-body">
        {{data.des}}
      </div>
      <div class="panel-body">
        <button class="text-right btn btn-success" style="border-radius:50px;">Dikerjakan Oleh : {{data.assignTo}}</button>
        <button class="text-right btn btn-danger" style="border-radius:50px;">Backlog</button>
        <button class="text-right btn btn-danger" style="border-radius:50px;">Testing Area</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sedangCoding () {
      console.log('getter', this.$store.getters.backlog)
       return this.$store.getters.sedangCoding
    }
  }
}
</script>
