<template>
  <b-container fluid>
    <b-col cols="10" offset="1">
      <ShowPost v-for="id in blogposts" :key="id" :postid="id" preview="true"/>
    </b-col>
  </b-container>
</template>

<script>
import ShowPost from './ShowPost.vue';
import firebase from "firebase";

export default {
  data() {
    return {
      blogposts: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection("blogposts")
      .onSnapshot(documents => {
        documents.forEach(doc => {
          this.blogposts.push(doc.id);
        });
      });
  },
  components: {
      ShowPost
  }
};
</script>

<style>
</style>