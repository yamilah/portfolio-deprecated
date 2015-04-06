$(document).ready(function() {

    function addImage(url, cap, url2, numLikes) {
        var div = $("<div>");
        div.addClass("wrapper");
        $("section").append(div);
        
        var img = $("<img>");
        img.attr("src", url);
        
        var link = $("<a>");
        link.attr("href", url2);
        link.append(img);
        div.append(link);
        
        var p = $("<p>");
        p.text(cap);
        div.append(p);
        
        var likes = $("<div>");
        likes.addClass("likes").text(numLikes);
        div.append(likes);
    }
    
    addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg", "منشن الي تبيه يشوف المقطع", "https://instagram.com/p/0lOFZ0g8gA/", 720);
    addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg", "RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits", "https://instagram.com/p/0lS-LWTbw9/", 432);
    addImage("http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/10919675_944043618953681_1961747465_n.jpg", "Сегодня была на прекрасном мероприятии #soundkids", "https://instagram.com/p/0lTX-pqkcC/", 543);
    addImage("http://placekitten.com/g/150/150", "Content content content content content content", "http://touchmybutt.net", 999);
    addImage("http://placekitten.com/g/150/150", "Content content content content content content", "http://touchmybutt.net", 255);
    addImage("http://placekitten.com/g/150/150", "Content content content content content content", "http://touchmybutt.net", 784);
});