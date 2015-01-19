$( init );
function init() {
  $('.makeMeDraggable').draggable( {
 cursor: 'move',
    containment: 'document',
    helper: "clone"
  } );


 $('.makeMeDroppable').droppable( {
    drop: handleDropEvent
  } );
}

