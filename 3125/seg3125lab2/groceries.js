// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        Organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        Organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        Organic: false,
		price: 10.00
    },
    {
        name: "tofu",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 2.99
    },
    {
        name: "Pork Sausages(4/pack)",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        price: 4.97
    },
    {
        name: "Nutella",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 4.47
    },
    {
        name: "OREO Milk Cookies",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 2
    },
    {
        name: "NESCAFE",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 4.64
    },
    {
        name: "Smoked Bacon",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        price: 6.47
    },
    {
        name: "instant noodles",
        vegetarian: false,
        glutenFree: false,
        Organic: false,
        price: 4.99
    },
    {
        name: "Ground Beef(1kg)",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        price: 14.05
    },
    {
        name: "Organic Liquid Honey",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 4.97
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price]);
        }
        else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price]);
        }
        else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push([prods[i].name,prods[i].price]);
        }
		else if (restriction == "None"){
			product_names.push([prods[i].name,prods[i].price]);
		}
    }
    product_names.sort(compareSecondColumn);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}