var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData); // Collection - of Video models
    this.render(); // render the AppView
    // We had to generate videoList AFTER appview was
    // rendered - videoList looked for .list
    this.videoList = new VideoListView({collection: this.videos});
    this.videoList.render();
    this.videoPlayer = new VideoPlayerView({model: this.videos.models[0]});
    this.videoPlayer.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
