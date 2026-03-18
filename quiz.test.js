function calculateGrade(score){

if(score>=80) return "A"
else if(score>=50) return "B"
else return "Fail"

}

function calculatePercentage(score,total){

return (score/total)*100

}

//  NEW FUNCTION
function isPass(score){
    return score >= 50;
}


//  TESTS
test("grade A test",()=>{
expect(calculateGrade(85)).toBe("A")
})

test("grade B test",()=>{
expect(calculateGrade(60)).toBe("B")
})

test("fail grade test",()=>{
expect(calculateGrade(20)).toBe("Fail")
})

test("percentage calculation",()=>{
expect(calculatePercentage(2,3)).toBeCloseTo(66.67)
})

//  PASS/FAIL TESTS
test("pass test", ()=>{
expect(isPass(60)).toBe(true)
})

test("fail test", ()=>{
expect(isPass(30)).toBe(false)
})