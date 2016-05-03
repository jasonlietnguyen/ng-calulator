app.controller('BmiController', function () {
    
    var bc = this;
    
    bc.answer = 0;
    
    bc.bmi = function () {
        
    bc.answer = (bc.weight * 703) / (bc.height * bc.height)
    
    bc.weight = '';
    bc.height = '';
    
    }

})