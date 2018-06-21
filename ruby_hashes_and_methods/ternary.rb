print 'Give me a number '
number = gets.to_i

if number > 100
  puts 'large'
else
  puts 'small'
end

puts (if (number > 100)
       'large'
     else
       'small'
     end)

number > 100 ? puts('large') : puts('small')
puts(number > 100 ? 'large' : 'small')