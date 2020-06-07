// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        Organic: false,
        category: "vegetables",
        price: 1.99,
        source: "https://www.shutterstock.com/search/brocoli",
        img: "img/broccoli.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        Organic: false,
        category: "bakery",
        price: 2.35,
        source: "https://bakingamoment.com/soft-white-bread-recipe/",
        img: "img/white-bread.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "meat",
        price: 10.00,
        source: "https://cooking.nytimes.com/recipes/1018054-salmon-with-smoked-salmon-butter",
        img: "img/salmon.jpg"
    },
    {
        name: "tofu",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        category: "vegetables",
        price: 2.99,
        source: "https://en.wikipedia.org/wiki/Tofu",
        img: "img/SilkyTofu.jpg"
    },
    {
        name: "Pork Sausages(4/pack)",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "meat",
        price: 4.97,
        source: "https://londonpie.com/product/banger-pork-sausage/",
        img: "img/Pork Sausages.jpg"
    },
    {
        name: "Nutella",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "cooking products",
        price: 4.47,
        source: "https://www.today.com/food/costco-just-released-giant-nutella-jar-t146281.com",
        img: "img/Nutella.jpg"
    },
    {
        name: "OREO Milk Cookies",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "fast food",
        price: 2,
        source: "https://www.target.com/p/oreo-original-chocolate-sandwich-cookies-14-3oz/-/A-12959727",
        img: "img/oreo.jpg"
    },
    {
        name: "NESCAFE",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "cooking products",
        price: 4.64,
        source: "https://www.walmart.ca/en/ip/nescaf-rich-colombian-instant-coffee/6000145830543",
        img: "img/cafe.jpg"
    },
    {
        name: "Smoked Bacon",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        category: "meat",
        price: 6.47,
        source: "https://www.garlicandzest.com/homemade-applewood-smoked-bacon/",
        img: "img/bacon-3.jpg"
    },
    {
        name: "instant noodles",
        vegetarian: false,
        glutenFree: false,
        Organic: false,
        category: "fast food",
        price: 4.99,
        source: "http://smithsonianapa.org/picklesandtea/instant-ramen-hacks/",
        img: "img/dried-noodles.jpg"
    },
    {
        name: "Ground Beef(1kg)",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        category: "meat",
        price: 14.05,
        source: "https://www.iga.net/en/product/lean/00000_000000021166500000",
        img: "img/beef.jpg"
    },
    {
        name: "Organic Liquid Honey",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        category: "cooking products",
        price: 4.97,
        source: "https://www.walmart.ca/en/ip/labonte-natural-organic-liquid-honey/6000197049534",
        img: "img/honey.jpg"
    },
    {
        name: "Great Value Orange Juice",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        category: "beverages",
        price: 2.98,
        source: "https://www.walmart.com/ip/4-Pack-Great-Value-Orange-Juice-10-Fl-Oz-6-Count/577544460",
        img: "img/Orange Juice.jpg"
    },
    {
        name: "Alkaline Water(1 Gallon)",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        category: "beverages",
        price: 3.38,
        source: "https://www.walmart.com/ip/Alkaline-Water-with-Himalayan-Minerals-Electrolytes-1-Gallon/36357542",
        img: "img/Alkaline.jpg"
    },
    {
        name: "Natrel Fine-filtered 1% Milk",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        category: "dairy",
        price: 4.48,
        source: "https://www.walmart.ca/en/ip/natrel-fine-filtered-1-milk/6000100070851",
        img: "img/milk.jpg"
    },
    {
        name: "Cheese",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        category: "dairy",
        price: 6.96,
        source: "https://www.walmart.com/ip/Great-Value-Finely-Shredded-Fiesta-Blend-Cheese-32-oz/10452468",
        img: "img/Cheese.jpg"
    },
    {
        name: "Apple",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        category: "fruits",
        price: 0.79,
        source: "https://www.walmart.ca/en/ip/apple-gala/6000195494284",
        img: "img/Apple.jpg"
    },
    {
        name: "Banana",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        category: "fruits",
        price: 0.5,
        source: "https://www.walmart.ca/en/ip/banana/875805",
        img: "img/Banana.jpg"
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
        }
        else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
        }
        else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
        }
		else if (restriction == "None"){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
        }
        else if (restriction == ""){
			product_names.push([prods[i].name,prods[i].price,prods[i].category,prods[i].img]);
		}
    }
    product_names.sort(compareSecondColumn);
	return product_names;
}

function Productsfilter(diet,category){
    var product_list = restrictListProducts(products,diet);
    let list = [];
    for (let i=0; i<product_list.length; i+=1) {
		if ((category == "vegetables") && (product_list[i][2] == "vegetables")){
			list.push(product_list[i]);
		}
		else if ((category == "meat") && (product_list[i][2] == "meat")){
			list.push(product_list[i]);
		}
        else if ((category == "fruits") && (product_list[i][2] == "fruits")){
			list.push(product_list[i]);
        }
        else if ((category == "cooking products") && (product_list[i][2] == "cooking products")){
			list.push(product_list[i]);
        }
        else if ((category == "dairy") && (product_list[i][2] == "dairy")){
			list.push(product_list[i]);
        }
        else if ((category == "beverages") && (product_list[i][2] == "beverages")){
			list.push(product_list[i]);
        }
        else if ((category == "bakery") && (product_list[i][2] == "bakery")){
			list.push(product_list[i]);
        }
        else if ((category == "fast food") && (product_list[i][2] == "fast food")){
			list.push(product_list[i]);
		}
		else if (category == "all"){
			list.push(product_list[i]);
        }
        else if (category == ""){
            list.push(product_list[i]);
        }
    }
    console.log(diet)
    console.log(category)
    console.log(product_list)
    console.log(list)
    list.sort(compareSecondColumn);
    return list

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