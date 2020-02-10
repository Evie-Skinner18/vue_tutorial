const app = new Vue(
  {
    // el is the root component. Tell vue what class/id to look for
    el : '#app',
    data: {
      tweetText: 'Hello mofo!',
      charactersRemaining: 280,
      commentText: '',
      liked: false
    },
    methods: {
      countCharacters: function(){
        this.charactersRemaining = 280 - this.commentText.length;
      }
    }
  }
);



