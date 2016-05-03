app.controller('Length2Controller', function () {
    
    var lc2 = this;
    
    lc2.answer = 0;
    
    lc2.footToInch = function () {
        
    lc2.answer = lc2.count = lc2.count * 12; //Miles
    
    lc2.count = '';
    
    }
    
    
    lc2.inchToFoot = function () {
        
    lc2.answer = lc2.count = lc2.count / 12; //Miles
    
    lc2.count = '';
    }
    
})