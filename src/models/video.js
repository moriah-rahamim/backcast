var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    // 2nd argument of trigger is passed as an argument to the callback listening
    this.trigger('select', this);
  }

});
