var VideoListEntryView = Backbone.View.extend({

  // Helper function that set event listeners; will call after items on DOM are rendered.
  setEventListeners: function() {
    var currentView = this;
    this.$el.find('.video-list-entry-title').on('click', function() {
      // COME BACK AND EXAMINE WHY
      currentView.model.select.call(currentView.model);
    });
  },

  render: function() {
    // Adding template html to this element
    this.$el.html(this.template(this.model.attributes));
    this.setEventListeners();
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
