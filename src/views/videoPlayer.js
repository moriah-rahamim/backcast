var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  changeNowPlaying: function(newModel) {
    // 'this' still refers to the Player
    // 'model' is the new model to point at
    this.model = newModel;
    this.render();
  },

  initialize: function() {
    // Event listener
    this.model.collection.on('select', this.changeNowPlaying.bind(this));
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
