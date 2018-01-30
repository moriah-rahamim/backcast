var VideoListView = Backbone.View.extend({
  // searched for .list element to append to
  el: '.list',
  // Helper that iterates through our collection and generates an entry for
  // each video model. It also assigns each entry view's el.
  createVideoListEntries: function() {
    // Get children of the video-list. Create a new
    // entry view for each child node.
    // Expect each entry to render itself when it's created
    var modelsCollection = this.collection.models;
    for (var i = 0; i < modelsCollection.length; i++) {
      var model = modelsCollection[i];
      var child = new VideoListEntryView({model: model});
      this.videoListEntries.push(child);
    }
  },

  initialize: function() {
    this.videoListEntries = [];
    this.createVideoListEntries();
  },

  render: function() {
    // Detach to clear previous list
    // Add template for html
    // Clear out template divs
    // Render each entry view and append to .video-list
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    for (var i = 0; i < this.videoListEntries.length; i++) {
      var view = this.videoListEntries[i].render();
      this.$el.find('.video-list').append(view.$el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
