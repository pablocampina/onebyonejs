// DISPLAY ITENS ONE BY ONE
function oneByone( putclass ){
    
    $( putclass ).hide().each(function( i ) {
        $( this ).delay( i * 300 ).fadeIn();
    });
    
}

// USE FUNCTION
oneByone( '.item' );