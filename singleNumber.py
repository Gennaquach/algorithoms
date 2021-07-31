def singleNumber(nums):    
  return (2*sum(set(nums))) - sum(nums)
        
print(singleNumber([2,1,1,3,3,4,4]))