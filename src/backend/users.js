import firebase from 'firebase';

export default {
    LoggedIn () {
        return !!firebase.auth().currentUser;
    },
    LogOut () {
        return firebase.auth().signOut();
    },
    LogInWithGoogle () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    },
    UserName () {
        return firebase.auth().currentUser.displayName;
    },
    UserPicLink () {
        return firebase.auth().currentUser.photoURL;
    },
    UserID () {
        return firebase.auth().currentUser.uid;
    }
};  