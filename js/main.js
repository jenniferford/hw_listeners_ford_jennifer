var headerColor = document.getElementById( 'header' );
        headerColor.addEventListener('click', function(){
        headerColor.style.backgroundColor = '#FFB7B7';
    });


var backgroundColor = document.getElementById( 'container' );
        backgroundColor.addEventListener('mouseover', function(){
        backgroundColor.style.backgroundColor = '#cdcdb4';
    });

        var image = document.getElementById("image_click");
image.addEventListener("click", function(){
    this.src="http://www.quickmeme.com/img/64/64551a2f6b1248181955f8e5c16e8c9041401ab57875d7c5fd0634e3742fddd8.jpg";
});