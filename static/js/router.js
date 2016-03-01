router = {
  init: function() {
    console.log('start router.init');
    if(window.location == 'http://localhost:8003/') {
      console.log('yes');
    }
    else {
      console.log('no');
    }

    routie({
      'steden-:id' : function() {
        var id = window.location.hash;
            id = id.slice( 8 );
        api.listRequest(id, 'lijst');
      },
      'steden' : function() {
        console.log('lijst');
      },
      'detail-:id' : function () {
        var id = window.location.hash;
            id = id.slice( 8 );
        api.singleRequest(id, 'detail');
      }
    })
      
  }
}


// 'steden/:id' : function() {
//         var id = window.location.hash;
//             id = id.slice( 8 );
          
//           console.log(id)

//        api.listRequest(id, 'lijst');
//       },
//       ':id' :function() {
//        template.init('detail');
//       } 
//     })