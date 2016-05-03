app.controller('LoanController', function () {
    
    var lc = this;
    
    lc.answer = 0;
    
    lc.loan = function () {
        
    lc.answer = lc.amount * Math.pow(1 + lc.intrest, lc.payment);
    
    lc.amount = '';
    lc.intrest = '';
    lc.payment = '';
    
    }
    
})