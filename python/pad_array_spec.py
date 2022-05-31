# Write unit tests!
from pad_array import pad

print(pad([1,2,3], 6)== [1, 2, 3, None, None, None])
print(pad([1,2,3], 5, "it's working")== [1, 2, 3, "it's working", "it's working"])
print(pad([1,2,3], 0,'Nope')== [1,2,3])
print(pad([1,2,3], 3,'Nope')== [1,2,3])