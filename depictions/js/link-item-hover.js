$(document).ready(function() {
    $(function() {
        console.log("link-item-hover.js debug message!");
        var items = $(".link-item.list-group-item");
        //console.log(items);

        items.hover(function() {
            for (var i = 0; i < items.length; i++) {
                //console.log(items[i]);
                var item = $(".link-item.list-group-item").eq(i);
                //console.log(item);
                //console.log($(this));
                //console.log(typeof item);
                //console.log(typeof $(this));
                //console.log("====================");
                
                //if (item === $(this).prev(".link-item.list-group-item")) {
                if (item.is($(this).prev(".link-item.list-group-item"))) {
                    //console.log("here");
                    item.css("border-bottom", "3px solid #f5f5f5");
                    //item.css("border-bottom-left-radius", "3px");
                    //item.css("box-shadow", "0 20px 0 white");
                } else if (item.is($(this))) {
                    item.css("border-bottom", "3px solid #f5f5f5");
                    //item.css("border-bottom-left-radius", "3px");
                    item.css("box-shadow", "0px -4px 0px 0px #f5f5f5");
                } else {
                    //item.css("border-top", "");
                    item.css("border-bottom", "");
                    //item.css("border-bottom-left-radius", "");
                }
            }

        }, function() {
            // on mouseout, reset the background colour
            //$(this).prev(".link-item.list-group-item").css("border-bottom", "");
            //$(this).css("border-bottom", "");

            $(this).prev(".link-item.list-group-item").css("border-bottom", "");
            $(this).css("border-bottom", "");
            $(this).css("box-shadow", "");
        });
    });
});