<template>
  <div class="col-md-12">
    <button type="button" name="button" class="btn btn-primary btn-lg"  data-toggle="modal" data-target="#newTask">Add New Backlog</button>

    <!-- NEW TASK MODAL -->
      <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">New Backlog</h4>
            </div>
            <div class="modal-body text-left">
              <label>Task Title :</label><br>
              <input type="text"  name="title" value="" class="form-control" v-model="newData.task" autofocus> <br>

              <label>Assign Job to :</label><br>
              <input type="text"  name="assignTo" value="" class="form-control" v-model="newData.assignTo" autofocus> <br>

                <label>Description :</label><br>
                <textarea type="text"  name="desc" value="" class="form-control" v-model="newData.des"></textarea><br>

                <label>Point : </label><br>
                <div class="input-group">
                  <span class="input-group-addon">0-10</span>
                  <input type="number"  name="point" value="" class="form-control" v-model="newData.point">
                </div

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary new-todo" @click="addBacklog"  data-dismiss="modal">Add Backlog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NEW TASK MODAL -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      newData: {
        task: '',
        assignTo: '',
        point: '',
        des: '',
        status: 1
      }
    }
  },
  methods: {
    addBacklog (event) {
      if(this.newData.task && this.newData.assignTo && this.newData.point && this.newData.des){
        console.log('cek masuk');
        event.preventDefault()
        this.$dbFire.push(this.newData)
        // this.$store.dispatch('addBacklog', this.newData)
      }
    }
  }
}

</script>
<style scoped>
  .btn {
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
