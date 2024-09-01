// true
console.log(String(true));  // "true"  (true -> "true")
console.log(Number(true));  // 1       (true -> 1)
console.log(Boolean(true));  // true    (true -> true)

// "123"
console.log(String("123"));  // "123"  ("123" -> "123")
console.log(Number("123"));  // 123    ("123" -> 123)
console.log(Boolean("123"));  // true   ("123" -> true)

// 0
console.log(String(0));  // "0"    (0 -> "0")
console.log(Number(0));  // 0      (0 -> 0)
console.log(Boolean(0));  // false  (0 -> false)

// null
console.log(String(null));  // "null"  (null -> "null")
console.log(Number(null));  // 0       (null -> 0)
console.log(Boolean(null));  // false  (null -> false)
