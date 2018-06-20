# Exercise: FizzBuzz
# Write a program that adds 1 to 100 to an array. If
# the number is a multiple of 3, it adds "FIZZ"
# instead. If the number is a multiple of 5, it adds
# "BUZZ" instead. If it's a multiple of both, it
# adds "FIZZBUZZ" instead.

result = []

for num in 1..100
  # if num % 3 == 0 && num % 5 == 0
  if num % 15 == 0
    result << "FIZZBUZZ"
  elsif num % 3 == 0
    result << "FIZZ"
  elsif num % 5 == 0
    result << "BUZZ"
  else
    result << num
  end
end

# p result

result = []

for num in 1..100
  str = ""
  str << "FIZZ" if num % 3 == 0
  str << "BUZZ" if num % 5 == 0
  str << num.to_s if str.length <= 0

  result << str
end

p result