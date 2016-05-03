app.controller('WeightController', function () {
    
    var wc = this;
    
    wc.answer = 0;
    
    wc.poundsToKl = function () {
        
    wc.answer = wc.count = wc.count * 2.2046; //Miles
    
    wc.count = '';
    
    }
    
    
    wc.klToPounds = function () {
        
    wc.answer = wc.count = wc.count / 2.2046; //Miles
    
    wc.count = '';
    }
    
    
})