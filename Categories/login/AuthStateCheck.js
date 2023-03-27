const firebaseConfig = {
    apiKey: configGOOGLE.apiKey,
    authDomain: configGOOGLE.authDomain,
    projectId: configGOOGLE.projectId,
    storageBucket: configGOOGLE.storageBucket,
    messagingSenderId: configGOOGLE.messagingSenderId,
    appId: configGOOGLE.appId,
    measurementId: configGOOGLE.measurementId
  };

  firebase.initializeApp(firebaseConfig);

  var uiConfig = {
    signInSuccessUrl: '../top-games.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user && !user.isAnonymous) {
      console.log('User is signed in.')
    //   document.getElementById('authenticated-content').style.display = 'block';
    } else {
      console.log('User is signed out.')
    //   document.getElementById('authenticated-content').style.display = 'none';
    }
  });