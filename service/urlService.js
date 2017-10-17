app.factory('myFactory',[function(){
	return {
		urlA: function(arrUrl){
			switch(arrUrl){
				case "my.home":
						return {
							imgUrl: ['./image/home.png', './image/changping.png', './image/shopping1.png','./image/herad.png'],
							font: ['active', '', '' ,'']
						};
				case "my.fenlei":
						return {
							imgUrl: ['./image/home1.png', './image/changping1.png', './image/shopping1.png','./image/herad.png'],
							font: ['', 'active', '' ,'']
						};
			    case "my.search":
						return {
							imgUrl: ['./image/home1.png', './image/changping1.png', './image/shopping1.png','./image/herad.png'],
						
							font: ['', 'active', '' ,'']
						};

				case "my.liebiao":
						return {
							imgUrl: ['./image/home1.png', './image/changping1.png', './image/shopping1.png','./image/herad.png'],
						
							font: ['', 'active', '' ,'']
						};

				case "my.shopping":
						return {
							imgUrl: ['./image/home1.png', './image/changping.png', './image/shopping3.png','./image/herad.png'],
							font: ['', '', 'active','']
						};
				case "my.me":
						return {
							imgUrl: ['./image/home1.png', './image/changping.png', './image/shopping1.png','./image/herad1.png'],
							font: ['', '', '',  'active']
						};
				default:
						return {
							imgUrl: ['./image/home.png', './image/changping.png', './image/shopping1.png','./image/herad.png'],
							font: ['active', '', '' ,'']
							
						};
				}
		}
	}
}]);














