import {v4} from 'uuid';

const initialState = {
	cars: [
	    {
	        id: v4(),
	        model: "Hyundai Grand i10",
	        veh_no: "18 D 4356",
			color: "Crimson Red",
			year: 2010,
	        image: "hyundai_grand_i10.jpg",
	        seat_cap: 4,
	        price: 3500,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
	          content: "The Grand i10 makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Grand i10 will still give you nearly 750 km on a single tank!"
	        }
	    },
	    {
	        id: v4(),
	        model: "Ford EcoSPort",
	        veh_no: "289KD 4356",
			color: "Glossy Blue",
			year: 2012,
	        image: "ford_ecosport.jpg",
	        seat_cap: 4,
	        price: 9350,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "1498cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
	          content: "The Ford EcoSPort makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Ford EcoSPort will still give you nearly 550 km on a single tank!"
	        }
	    },
	    {
	        id: v4(),
	        model: "Maruti Suzuki XL6",
	        veh_no: "44CV 4356",
			color: "Deep Blue",
			year: 2019,
	        image: "maruti_suzuki_xl6.jpg",
	        seat_cap: 6,
	        price: 18500,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "1462cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
	          content: "The Maruti Suzuki XL6 makes the grade where the most important vehicle characteristics are concerned: It's really roomy (for a city car), its handling is excellent, it's nicely bolted together, and it's quite safe too. Its fuel economy isn't class-leading, but the Maruti Suzuki XL6 will still give you nearly 950 km on a single tank!"
	        }
	    },
	    {
	        id: v4(),
	        model: "Lexus ES 300H",
	        veh_no: "23 B 5846",
			color: "Red Mica Crystal Shine",
			year: 2018,
	        image: "lexus_es_300h.jpg",
	        seat_cap: 5,
	        price: 38850,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "2487cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
	          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at laborum sit eius dolorem soluta magnam mollitia dolorum molestias, minus. Facere dolor fuga molestiae nisi, impedit amet, perspiciatis similique illum magnam laudantium iusto. Commodi voluptate beatae exercitationem facilis officia, incidunt accusantium hic ex dolor minima fugiat repellendus ipsa maiores tempora."
	        }
	    },
	    {
	        id: v4(),
	        model: "Ford Freestyle VCT",
	        veh_no: "17 NT 5716",
			color: "Canyon Ridge",
			year: 2019,
	        image: "ford_freestyle_vct.jpg",
	        seat_cap: 5,
	        price: 16000,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "1194cc, 3 Cylinders Inline, 4 Valves/Cylinder, DOHC",
	          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vero, est quo asperiores debitis ipsa excepturi corporis vitae ratione minus laboriosam nostrum iure omnis facilis rerum blanditiis, consequatur ea sequi natus quae molestias expedita porro, ex fugiat. Repellendus, reprehenderit tenetur!"
	        }
	    },
	    {
	        id: v4(),
	        model: "Skoda Rapid",
	        veh_no: "39 O 3326",
			color: "Lapiz Blue",
			year: 2015,
	        image: "skoda_rapid.jpg",
	        seat_cap: 5,
	        price: 9200,
	        book_status: false,
	        description: {
	          type: "Petrol Car",
	          engine: "1598cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC",
	          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora non perspiciatis, quia iusto. Doloribus distinctio repellat reprehenderit ea commodi veniam officia ipsam. Incidunt ea nulla ex aut, dolorum voluptate perspiciatis?"
	        }
		},
		{
	        id: v4(),
	        model: "Honda Clarity",
	        veh_no: "11 DQ 9841",
			color: "Modern Steel Metallic",
			year: 2020,
	        image: "2020_Honda_Clarity.jpg",
	        seat_cap: 4,
	        price: 23500,
	        book_status: false,
	        description: {
	          type: "Hybrid Car",
	          engine: "181-hp electric motor",
	          content: "The 2020 Honda Clarity plug-in hybrid is motivated by a 181-hp electric motor fed by a 17.0-kWh lithium-ion battery pack. The car's gas engine, a 1.5-liter four-cylinder, serves mainly as a generator for the batteries and rarely drives the Clarity PHEV's front wheels directly. Combined output is 212 horsepower."
	        }
		},
		{
	        id: v4(),
	        model: "BMW i8",
	        veh_no: "911 VZ 5634",
			color: "SOPHISTO GREY METALLIC",
			year: 2020,
	        image: "2020-bmwi8.jpg",
	        seat_cap: 2,
	        price: 53500,
	        book_status: false,
	        description: {
	          type: "Coupe",
	          engine: "turbocharged 1.5-liter three-cylinder engine & 11.6-kWh battery pack + two electric motors",
	          content: "Precise lines and sweeping silhouettes. Scissor doors and streamflow design. The BMW i8 perfectly captures the emotion of motion."
	        }
		}
    ],

    show_car: {},
    book_car: {}
}





function rootReducer(state = initialState, action) {

	console.log("action: ", action);

	switch(action.type) {
		case "SHOW_CAR": {
			return {
				...state,
				show_car: {...action.payload.item}
			}
		}
		case "BOOK_CAR": {
			return {
				...state,
				book_car: {...action.payload.item}
			}
		}
		case "UPD_CAR": {
			const arr = [...state.cars];
		    let index;
		    arr.forEach((ele,i)=>{
		      if(ele.id===action.payload.item.id){
		        index = i;
		      }
		    });
		    arr.splice(index, 1, action.payload.item);
		    const obj = {...state, cars: arr};
		    return obj;
		}
		default: return state;
	}
}

export default rootReducer;