number = 1

while number <= 60
  if number % 2 != 0
    puts number
  end
  number += 1
end

while number <= 60
  puts number if number.odd?
  number += 1
end

while number <= 60
  puts number
  number += 2
end

