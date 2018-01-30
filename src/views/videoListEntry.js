var VideoListEntryView = Backbone.View.extend({

  render: function() {
    // Adding template html to this element
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
