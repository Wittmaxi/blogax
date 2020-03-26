<template>
  <div>
    <div v-if="logged_in">
        <div class="container-fluid">
          <b-img class="pfp" rounded="circle" height="50px" :src="profile_pic"></b-img>
          <div>
            <strong>{{ username }}</strong> <br>   
            <b-button @click="onSignOut()" size="sm" variant="outline-dark"> Sign Out! </b-button> 
          </div>
        </div>
    </div>
    <div v-else>
      <b-button @click="onClickSignup()">Sign In/Up</b-button>
    </div>
  </div>
</template>

<script>
import users from "../backend/users.js";

export default {
  data() {
      return {
          logged_in: users.LoggedIn(),
          username: users.UserName(),
          profile_pic: users.UserPicLink(),
      };
  },
  methods: {
    onClickSignup: () => {
        users.LogInWithGoogle();
    },
    onSignOut: ()=> {
      users.LogOut();
    }
  }
};
</script>

<style lang="css">
.pfp {
  margin-right: 10px;
}
</style>