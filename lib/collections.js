Lists = new Meteor.Collection('lists');

if (Meteor.isClient) {
  Lists = new GroundDB(Lists);
}

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function () {
  var nextLetter = 'A', nextName = 'List ' + nextLetter;
  while (Lists.findOne({name: nextName})) {
    // not going to be too smart here, can go past Z
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = 'List ' + nextLetter;
  }

  return nextName;
};

Todos = new Meteor.Collection('todos');


if (Meteor.isClient) {
  Todos = new GroundDB(Todos);
}
