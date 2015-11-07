var h1 = document.getElementbyId( 'heading1' );

var x = 0;

h1.addEventListener( 'click', function() {
		x= x+1;
		var myElement = document.createElement( 'p' );
		myElement.innerHTML = "This is click number " + x ;
		document.getElementbyId( 'heading1' ).appendChild( myElement );
});