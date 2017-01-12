(function() {
  function Fixtures() {
    var Fixtures = {};

    //lists album1's attributes
    var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: '/assets/images/album_covers/01.png',
        songs: [
            { name: 'Blue', length: '161.171', audioUrl: '/assets/music/blue' },
            { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
            { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
            { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
            { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }
        ]
    };


    //lists album2's attributes
    var albumMarconi = {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtUrl: 'assets/images/album_covers/20.png',
        songs: [
            { name: 'Hello, Operator?', length: '61' },
            { name: 'Ring, ring, ring', length: '301' },
            { name: 'Fits in your pocket', length: '201'},
            { name: 'Can you hear me now?', length: '194' },
            { name: 'Wrong phone number', length: '135'}
        ]
    };

    //lists album3's attributes
    var albumPastry = {
      name: 'The Life of Sweets',
      artist: 'Donut Man',
      label: 'NomNom',
      year: '2016',
      albumArtUrl: 'assets/images/album_covers/01.png',
      songs: [
        {name: 'Sugar Donut', length: '1:00'},
        {name: 'Chocolate Donut', length: '1:30'},
        {name: 'Glazed Donut', length: '2:00'},
        {name: 'Plain Donut', length: '2:30'}
      ]
    };

    Fixtures.getAlbum = function() { //public method
      return albumPicasso;
    };

    Fixtures.getCollection = function(numberOfAlbums){
        var albums = [];
        for (var i = 0; i < numberOfAlbums; i++){
          albums.push(albumPicasso);
        }
        return albums;
    };


    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();