<template>
  <b-card>
    <b-card-title>
      <router-link class="link" :to="'/post?postid=' + this.postid" tag="div">{{ post.title }}</router-link>
    </b-card-title>
    <b-card-sub-title>
      <b-img class="pfp" rounded="circle" height="30px" :src="post.pfp"></b-img>
      {{ post.creator }}
    </b-card-sub-title>

    <b-card-text>{{ post.content }}</b-card-text>
  </b-card>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
        creator: "",
        pfp: ""
      }
    };
  },
  props: {
    postid: {
      type: String,
      required: true
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  created() {
    firebase
      .firestore()
      .collection("blogposts")
      .doc(this.postid)
      .get()
      .then(elem => {
        this.post.title = this.TrimString(elem.data().title, 30);
        this.post.content = this.TrimString(elem.data().content, 400);
        this.post.creator = elem.data().username;
        this.post.pfp = elem.data().pfp;
      })
      .catch((e) => {
          console.log (e);
        this.post.title = "Something went wrong. postid: " + this.postid;
      });
  },
  methods: {
    TrimString(string, length) {
      if (this.preview) {
        return string.length > length
          ? string.substring(0, length - 3) + "..."
          : string;
      } else return string;
    }
  }
};
</script>

<style>
</style>