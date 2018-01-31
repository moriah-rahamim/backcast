var VideoListEntryView = Backbone.View.extend({

  // Helper function that set event listeners; will call after items on DOM are rendered.
  setEventListeners: function() {
    var currentView = this;
    this.$el.find('.video-list-entry-title').on('click', function() {
      currentView.model.select.call(currentView);
    });
    this.on('select', function() {console.log('hallo');});

  },

  render: function() {
    // Adding template html to this element
    this.$el.html(this.template(this.model.attributes));
    this.setEventListeners();
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
