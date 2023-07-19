
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:15000,rate:7,years:10})).toEqual('174.16');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:12008,rate:3,years:12})).toEqual('99.40');
});

it('should handle non-number inputs without errors',function(){
  expect(calculateMonthlyPayment({amount:'hello0',rate:'thirteen',years:NaN})).toBe('NaN');
}

)
