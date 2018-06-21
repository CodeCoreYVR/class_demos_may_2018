def multiply(a, *b)
  result = a
  b.each do |num|
    result *= num
  end
  result
end

puts multiply(1, 2, 3, 4, 5, 6)
puts multiply 3
puts multiply 3, 5,3 ,4,23, 32,423, 4,24, 23,342


def largest(*numbers)
  numbers.max
end

puts largest 3, 5,3 ,4,23, 32,423, 4,24, 23,342
