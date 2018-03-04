/**
 * Created by David on 05/03/2017.
 */

$.getJSON('https://api.foursquare.com/v2/venues/explore?mode=url&ne=6.238407%2C-75.599231&sw=6.227571%2C-75.613564&client_id=2N4Z4GAEWHKCOVEJ0TMSKY03KF5A03C5W1YOCX4LFMSCJKNR&client_secret=SXJVATMBHVZEAUMEAYGAJ3MZU4ZUVNS3BDLJSIA1WXYIJLNZ&v=20170306',
    function(data) {
        $.each(data.response.groups[0].items, function(i,venues){

            var list = document.getElementById("list-venues");
            var element = document.createElement("div");

            var element_right = document.createElement("div");
            element_right.className="col-md-6";
            var element_left = document.createElement("div");
            element_left.className="col-md-6";

            //imagen, titulo y demas que componen un elemento de la lista
            var img= document.createElement("img");

            $.getJSON('https://api.foursquare.com/v2/venues/'+venues.venue.id+'/photos?3&client_id=2N4Z4GAEWHKCOVEJ0TMSKY03KF5A03C5W1YOCX4LFMSCJKNR&client_secret=SXJVATMBHVZEAUMEAYGAJ3MZU4ZUVNS3BDLJSIA1WXYIJLNZ&v=20170306',
                function(data) {
                    var prefix_f = data.response.photos.items[0].prefix;
                    var suffix_f = data.response.photos.items[0].suffix;
                        img.src = prefix_f + "300x300" + suffix_f;
                });


            img.src = "https://www.medellin.gov.co/irj/go/km/docs/galerias/Imagenes/Panor%C3%A1micas%20de%20ciudad%20y%20sitios%20de%20inter%C3%A9s/500_400/08.31.2016_HotelNutibara.jpg";

            var title= document.createElement("h1");
            title.appendChild(document.createTextNode(venues.venue.name));
            var corp= document.createElement("h2");
            corp.appendChild(document.createTextNode(venues.venue.location.address));


            //agregamos los elementos a la lista
            element_left.appendChild(img);
            element_right.appendChild(title);
            element_right.appendChild(corp);

            element.appendChild(element_left);
            element.appendChild(element_right);

            list.appendChild(element);
        });
    });