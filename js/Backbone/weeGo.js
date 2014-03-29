
    var CreateEventModel = Backbone.Model.extend({
        defaults: function () {
            return {
                Category: ['Basketball', 'Rock Climbing', 'Floating'],
                Location: "Nowhere",
                Time: new Date(),
                MinimumAttendees: 0,
                MaximumAttendees: 9999,
                Description: "No description"
            };
        }
    });

    var CreateEventView = Backbone.View.extend({
        model: CreateEventModel,

        el: $('#createEvent'),

        initialize: function () {
            _.bindAll(this, "render");
            this.model = new CreateEventModel();
            this.template = _.template($('#createEvent-view-template').html());
            this.render();
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        }
    });

    var CreateEventButtonView = Backbone.View.extend({
        el: $('#createEventBtn'),

        events: {
            'click': 'createEvent'
        },

        createEvent: function(){
            var createEvent = new CreateEventView();
        }
    });