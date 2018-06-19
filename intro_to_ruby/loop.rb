sum = 0

loop do
  print 'Give me a number: '
  number = gets.chomp
  break if number == 'exit'
  sum += number.to_f
end

puts sum