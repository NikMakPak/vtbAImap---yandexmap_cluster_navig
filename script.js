import offices from './offices.js';
import atms from './atms.js';



// function init() {
// 	let map = new ymaps.Map('map-test', {
// 		center: center,
// 		zoom: 17
// 	});

// 	map.controls.remove('geolocationControl'); // удаляем геолокацию
//   map.controls.remove('searchControl'); // удаляем поиск
//   map.controls.remove('trafficControl'); // удаляем контроль трафика
//   map.controls.remove('typeSelector'); // удаляем тип
//   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   map.controls.remove('rulerControl'); // удаляем контрол правил

//   offices.forEach((office) => {
//     if(office.salePointName) {
//         addMarker(map, [office.latitude, office.longitude]);
//     }
//   });

//   atms.forEach((atm)=>{
//     if(atm.address) {
//         addMarker(map, [atm.latitude, atm.longitude]);
//     }
//   });
// }

// ymaps.ready(init);


function addMarker(map, coordinates) {
  let marker = new ymaps.Placemark(coordinates);
  map.geoObjects.add(marker);
}

$(document).ready(function(){
    ymaps.ready(init);
    let center = [55.76, 37,64];
    let Map;
    function init(){
        Map = new ymaps.Map("map", {
            center: center,
            zoom: 7
        })

        offices.forEach((office) => {
          if(office.salePointName) {
            addMarker(Map, [office.latitude, office.longitude]);
          }
        });
            
        atms.forEach((atm)=>{
          if(atm.address) {
              addMarker(Map, [atm.latitude, atm.longitude]);
          }
        });
    }
})