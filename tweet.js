
Vue.component('tweet', {
    props: ['tweetText', 'id'],
    data: function() {
      return {
        charactersRemaining: 280,
        commentText: '',
        liked: false,
        todaysDate: new Date().toLocaleDateString('es-ES')
      }
    },
    methods: {
      countCharacters: function() {
        this.charactersRemaining = 280 - this.commentText.length
      },
      toggleLike: function() {
        this.liked = !this.liked
      }
    },
    // each tweet component in the tweets array will have this structure
    template: `<!--to-do: remix this in your own way!-->
    <!-- status div is the root component which links up with el in the js file -->
    <div class="status">
        <div class="tweet-content">
        <img src="https://amazon.clikpic.com/claysinclair/images/REPUBLIC_POSTER_small1.JPG" class="logo" alt="Bandera de la República">
        <div class="tweet">
            <a href="https://www.claysinclair.com/section826034.html">La República Popular de Stroud</a>
            <span>@Stroud&Proud · {{ todaysDate }}</span>
            <!-- the value stored in the 'data' property of our root vue component will be rendered here-->
            <p class="tweet-text">
                {{ tweetText }}
            </p>
            <div class="reactions like" v-on:click="toggleLike">
            <span class="like">
                <span v-if="liked">♥️</span>
                <span v-else>♡</span>
            </span>
            </div>
        </div>
        </div>
        <div class="comment-bar">
            <!-- v-model is a vue directive that will link up what the user types here to the var we've 
            defined, in this case commentText -->
        <textarea placeholder="tweet your reply" v-model="commentText" v-on:input="countCharacters"></textarea>
        <span v-if="charactersRemaining <= 0" class="characters-remaining">
            No more characters left soz!
        </span>
        <span v-else class="characters-remaining">
            {{ charactersRemaining }} characters remaining
        </span>
        </div>
    </div>`
  })


// el is the root component. Tell vue what class/id to look for
const app = new Vue({ 
    el : '#app',
    data: {
        tweets: [
            {id: 1, tweetText: 'Hello world!'},
            {id: 2, tweetText: 'Do ju wan to see my cucu??'},
            {id: 3, tweetText: 'Bienvenidos a la primera aplicación Vue de Evie ;->'},
            {id: 4, tweetText: 'Soy la hija del Duque de Cookies.'}
        ]
    }
});


  

