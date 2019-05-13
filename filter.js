// JavaScript source code

application.filter('companies', function () {
                                return function (getType) {
                                    switch (getType) {
                                        case 1:
                                            return "ServiceNow Platinum Partner";
                                       case 2:
                                            return "ServiceNow Gold Partner";
                                        case 3:
                                            return "ServiceNow Silver Partner";
                                        case 4:
                                            return "ServiceNow Bronze Partner";
                                    }
                                }                              
                            })
