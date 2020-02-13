var hotelVue = hotelVue || {}
hotelVue = {
	hotelVue_body: () => {
		return `
		<div class="containerhotel" style="margin-left:20%; height:1500px; width:70%">
    <div class="rowhotel">
        <h1>HOTEL</h1><br>
         <div id="hotelbodydiv" style=" width:90%; margin-right:10%">
    </div>
    </div>
    <button id="hotelDBbtn">HotelDB</button>
    <button id="restoDBbtn">RestoDB</button>
    <button id = "mapdb">MapDB</button>
    <button id = "createtourDBbtn">TourDB</button>
    <button id = "createCoronaDBbtn">CoronaDB</button>
    <button id = "createAlldataDBbtn">AlldataDB</button>
    <button id = "createMyListDBbtn">MyListDB</button>
  </div>
`
	}
}
