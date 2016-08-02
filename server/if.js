if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: '111',
    url: 'http://www.baidu.com',
    author:'Tom'
  });
}


Meteor.publish('posts', function() {
  return Posts.find();
});


Meteor.publish('somePosts', function(){
  return Posts.find({'author': 'Tom'});
});

Meteor.publish('allPosts', function(){
  return Posts.find({}, {fields: {
    date: false
  }});
});

Meteor.publish('allPosts', function(){
  return Posts.find({'author': 'Tom'}, {fields: {
    date: false
  }});
});



