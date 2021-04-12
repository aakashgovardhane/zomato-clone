const restaurants = require('../models/restaurants');

exports.filter = (req, res) => {
    const filter = req.body;
    const passedToFilter = Object.keys(filter); // passed arguments to filter the data
    let filterDetails = {}; // empty object for create object dyanamically for pass to mongoose find function
    let sortNum = 1; //Default sort : accending
    let page = 1; // Default PageNumber : 1
    //below logic is create object dynamically for filter the data from mongodb 
    for (let i = 0; i < passedToFilter.length; i++) {
        switch (passedToFilter[i]) {
            case 'mealtype':
                filterDetails["type.mealtype"] = filter[passedToFilter[i]];
                break;
            case 'city_name':
                filterDetails["city_name"] = filter[passedToFilter[i]];
                break;
            case 'cuisine':
                filterDetails["Cuisine"] = {$elemMatch:{cuisine:{$in:filter[passedToFilter[i]]}}};
                break;
            case 'hcost':
                const hcost = filter[passedToFilter[i]];
                for (let j = 0; j < passedToFilter.length; j++) {
                    if (passedToFilter[j] == 'lcost') {
                        filterDetails["cost"] = { $lte: hcost, $gte: filter[passedToFilter[j]] };
                    }
                }
                break;
            case 'sort':
                sortNum = filter[passedToFilter[i]];
                break;
            case 'page':
                page = filter[passedToFilter[i]];
                break;
        }
    }
    restaurants.find(filterDetails).sort({ "cost": sortNum })
        .then(response => {
            //pagintion logic
            const perPageCount = 2;
            let pagescounted = Math.ceil(response.length/perPageCount);
            let pages =[] ;
            for(i=0;i<pagescounted;i++){
                pages.push(i+1)
            }
            let PerPageRest = []; //this array will be store only two objects(Restaurants) dynamically 
            let restPagination = []; // this array store the array PerPageRest which is declare above
            for (let i = 0; i < response.length; i++) {
                if (PerPageRest.length == perPageCount) {
                    restPagination.push(PerPageRest); //store two objects array(PerPageRest) in array(restPagination) for pagination 
                    PerPageRest = [];
                }
                PerPageRest.push(response[i]); //store 2 restarants objects
            }
            restPagination.push(PerPageRest);//last array (PerPageRest) is not pushed in for loop therefore it is pushed here
            PerPageRest = [];
            res.status(200).json({'totalpages':pages,'pagenumber':page, 'Restaurants': restPagination[page - 1]  })
        })
        .catch(err => console.log(err));
}