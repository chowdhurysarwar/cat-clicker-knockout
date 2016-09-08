var initalCats = [
  {
    "name": "Max",
    "clickCount": 0,
    "imgSrc": "img/cat1.jpg",
    "nickNames": ['BAqua','BBob','BLuis']
  },
  {
    "name": "Lucy",
    "clickCount": 0,
    "imgSrc": "img/cat2.jpg",
    "nickNames": ['Birali', 'Lucyii']
  },
  {
    "name": "Charlie",
    "clickCount": 0,
    "imgSrc": "img/cat3.jpg",
    "nickNames": ['ChaBirali', 'ChaLucyii']
  },
  {
    "name": "Bailey",
    "clickCount": 0,
    "imgSrc": "img/cat4.jpg",
    "nickNames": ['Bailaiee', 'Bala']
  },
  {
    "name": "Buddy",
    "clickCount": 0,
    "imgSrc": "img/cat5.jpg",
    "nickNames": ['Buddiii']
  }
];

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	// this.imgAttribution = ko.observable(data.imgAttribution);

	this.catTitle = ko.computed(function(){
		if(this.clickCount() < 10)
			return "Newborn";
		else if(this.clickCount() >= 10 && this.clickCount() < 20)
			return "Infant";
		else if(this.clickCount() >= 20)
			return "Teenager";
		//return  this.name() + " has been clicked " + this.clickCount() +" times";
	}, this);

	this.nickNames = ko.observableArray(data.nickNames);
	// this.nickNames = ko.observableArray([
	//     { nickName: "Aqua" },
	//     { nickName: "Bob" },
	//     { nickName: "Luis" }
	// ]);

	// this.nickNames2 = ko.observableArray(['BAqua','BBob','BLuis']);
}

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initalCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCatIndex = 0;
	this.currentCat = ko.observable(this.catList()[this.currentCatIndex]);
	// this.currentCat = ko.observable(new Cat({
	// 	clickCount:0,
	// 	name: 'Biral',
	// 	imgSrc: 'img/cat1.jpg',
	// 	// imgAttribution: 'Ben Jeff Udacity',
	// 	nickNames: ['BAqua','BBob','BLuis']
	// }));
	
	this.incrementCounter = function() {
		// this.clickCount(this.clickCount()+1);
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	}

	this.itemClicked = function(index){
		self.currentCat(self.catList()[index]);
		// self.currentCatIndex(index);
		// you can also grab the clicked CAT
		// self.currentCat(clickedCat);
	}
}

ko.applyBindings(new ViewModel());