var VideoListView = Backbone.View.extend({
  // searched for .list element to append to
  el: '.list',

  initialize: function() {
    this.render(); // render the VideoListView
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
