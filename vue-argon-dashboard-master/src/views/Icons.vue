<template>
  <div>
    <base-header type="gradient-danger" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
    </base-header>
    <div class="container-md mt--7">
    <div class="card">
        <h5 class="card-header">Add Data</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
        </div>
      </div>
      </div>

  </div>
</template>

<script>
export default {

};
</script>

<style></style>
