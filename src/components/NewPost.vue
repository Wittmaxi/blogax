<template>
  <b-container fluid>
    <b-col cols="10" offset="1">
      <b-form>
        <b-form-group 
          id="input-group-1" 
          label="Title of your new Blog Entry" 
          label-for="input-1"
        >
          <b-form-input 
            id="input-1"
            v-model="form.title"
            required
            placeholder="Enter a title for your blog"
          ></b-form-input>
        </b-form-group>
        <b-form-textarea id="textarea" v-model="form.text" placeholder="Submit to your Blog!" rows="12" />
        <b-button @click="submit_blog()" type="submit" variant="primary"> Post to Blog </b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
import users from '../backend/users.js'
import firebase from 'firebase'

export default {
  data() {
    return {
      form: {
        text: "",
        title: ""
      }
    };
  },
  methods: {
    submit_blog () {
      firebase.firestore().collection('blogposts').doc().set({
        userid: users.UserID(),
        username: users.UserName(),
        pfp: users.UserPicLink(),
        title: this.form.title,
        content: this.form.text
      }).then (() => {
        alert ('Sent off');
        this.$router.push ('/');
      });
    }
  }
};
</script>

<style>
</style>