mapboxgl.accessToken = 'pk.eyJ1IjoiZGJlbnphcXVlbiIsImEiOiJjbDJwMTN2dDMxNXluM2prejI3MHJ3MmV6In0.cEfFzkKM5y5LTjqx9ltMng'

var map= new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [ -77.02793, 38.89811],
    zoom: 14
});

var marker = new mapboxgl.Marker()
    .setLngLat([-77.03533, 38.89044])
    .addTo(map);

const busStops = [

    [-77.03938, 38.88858],
    [-77.03952, 38.89061],
    [-77.03955, 38.89265],
    [-77.03942, 38.89419],
    [-77.03946, 38.89622],
    [-77.03943, 38.89825],
    [-77.03945, 38.90028],
    [-77.03937, 38.90231],
    [-77.04016, 38.90422],
    [-77.04071, 38.90514],
    [-77.04184, 38.90696],
    [-77.04317, 38.90925]
    ];

let counter = 0;
function move(){
    setTimeout(() =>{
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 60000);
}
