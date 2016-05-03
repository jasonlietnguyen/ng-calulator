app.controller('LengthController', function () {
    
    var lc = this;
    
    lc.answer = 0;
    
    lc.milesToKm = function () {
        
    lc.answer = lc.count = lc.count / 0.6214; //Miles
    
    lc.count = '';
    
    }
    
    
    lc.kmToMiles = function () {
        
    lc.answer = lc.count = lc.count * 0.6214; //Miles
    
    lc.count = '';
    }
})