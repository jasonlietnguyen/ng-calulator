app.controller('TemperatureController', function () {
    
    var tc = this;
    
    tc.answer = 0;
    
    tc.fToC = function () {
        
    tc.answer = tc.count = (tc.count - 32) * 5/9; 
    
    tc.count = '';
    
    //T(°C) = (T(°F) - 32) × 5/9
    
    }
    
    
    tc.cToF = function () {
        
    tc.answer = tc.count = tc.count * 9/5 + 32; 
    
    tc.count = '';
    
    //T(°F) = T(°C) × 9/5 + 32
    }
    
    
})