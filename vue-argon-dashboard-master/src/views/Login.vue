<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-2">
          <div class="btn-wrapper text-center">
             <img src="img/logo-analitica-black.png" style="width: 240px"/>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Login to Analitica Admin</small>
          </div>
          <form @submit.prevent="userLogin">
            <input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            />
         

            <input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            />
           

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <button type="submit" class="button-login my-4">Sign in</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.model.email, this.model.password)
        .then(() => {
            this.$router.push('/dashboard')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }


};
</script>
<style>
 .button-login{
   background-color: rgb(169, 54, 149);
   border-radius: 10px;
   border: none;
   padding-top: 5px;
   padding-right: 10px;
   padding-left: 10px;
   padding-bottom:5px;
   color: white;
   font-family: sans-serif;
 }
</style>
