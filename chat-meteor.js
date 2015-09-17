Chats = new Mongo.Collection("chats");

if (Meteor.isClient) {

  Template.chat.helpers({
    chats: function () {
      return Chats.find()
    }
  });

  Template.chat.events({
    'submit form': function (event, template) {

      event.preventDefault();
      var author = Meteor.user().profile.name;
      var message = $('#chatText').val();

      Chats.insert({author: author, message: message});

      $('#chatText').val('')

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}



// meteor add accounts-ui
// meteor add accounts-facebook
