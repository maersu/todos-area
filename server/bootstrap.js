// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {
        name: "Saving energy",
        items: ["Switch off anything that uses electricity",
          "Unplug",
          "Use renewable energy sources",
          "Trade in your dryer for a good old-fashioned clothesline",
          "Run your air conditioner sparingly or not at all",
          "Switch to compact florescent or LED light bulbs",
          "Get skylights",
          "Close doors after you leave a room"
        ]
      },
      {
        name: "Saving water",
        items: ["Check for leaks",
          "Turn off the water when you're not using it",
          "Avoid salt-based water softeners",
          "Install low-flow toilets",
          "Conserve water"
        ]
      },
      {
        name: "Sustainable transportation",
        items: ["Organize a carpool for work or school",
          "Plan your errands to avoid going around in circles",
          "Invest in a good bicycle and helmet",
          "Get a hybrid"
        ]
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function (list) {
      var list_id = Lists.insert({
        name: list.name,
        incompleteCount: list.items.length
      });

      _.each(list.items, function (text) {
        Todos.insert({
          listId: list_id,
          text: text,
          createdAt: new Date(timestamp)
        });
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }
});
