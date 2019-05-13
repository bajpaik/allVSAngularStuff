



var application = angular
    .module('MyfirstApp', [])
                         //making custom filter below, but this filter is made in a seperate file as filter.js.
  // .filter('companies', function () {
   //                             return function (getType) {
   //                                 switch (getType) {
  //                                      case 1:
    //                                        return "ServiceNow Platinum Partner";
  //                                      case 2:
    //                                        return "ServiceNow Gold Partner";
 //                                       case 3:
   //                                         return "ServiceNow Silver Partner";
  //                                      case 4:
 //                                           return "ServiceNow Bronze Partner";
 //                                   } }                              
  //                          }) 
    .controller("nameOfController", function ($scope) {
                            var employee = {

                                naame: "Kush_Bajpai",
                                designation: "ServiceNow Consultant",
                                DOJ : "14-Jan-2019"
                            };
                            $scope.emp = employee;
                            
                            var logo = {

                                company: "ServiceNow",
                                founder: "Fred Luddy",
                                img: "service-now-logo.png"

                            };
                            $scope.logos = logo 

                            var cars = [

                                { name: "Harrier", brand: "TATA", type: "SUV" },
                                { name: "Vento", brand: "Volkswagon", type: "Sedan" },
                                { name: "CITY", brand: "Honda", type: "Sedan" },
                                { name: "Captur", brand: "Renault", type: "MUV" }

                            ];
                            $scope.cars = cars;
                            var CompanyList = [
                            // refer to custom filter on type object property
                                { name: "Delloite", noOfEmployees: "3.5L", type: 1 },
                                { name: "HCL", noOfEmployees: "2.3L", type: 2 },
                                { name: "Cognizant", noOfEmployees: "Honda", type:2 },
                                { name: "EY", noOfEmployees: "1.0L", type: 1 },
                                 { name: "Fujistu", noOfEmployees: "1.5L", type: 3 },
                                  { name: "KPMG", noOfEmployees: "0.75L", type: 2 },
                                   { name: "Accenture", noOfEmployees: "3L", type: 1 },
                                    { name: "PwC", noOfEmployees: "4L", type: 4 }

                            ];

                            $scope.companies = CompanyList;


                            // custom model(function) capable of filtering by name and type 
                            $scope.carsFilter = function (item) {

                                if ($scope.Searchcars == undefined) {
                                    return true;
                                }
                                else {

                                    //IF USER TYPES SOMETHING INTO THE TEXT FIELD
                                    if (item.name.toLowerCase().indexOf($scope.Searchcars.toLowerCase()) != -1 ||
                                        item.type.toLowerCase().indexOf($scope.Searchcars.toLowerCase()) != -1) {
                                        return true;
                                    }
                                }
                                return false;
                            };

   
                            

});



