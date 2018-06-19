number = rand(1000)

if number > 500
  puts 'The number is large'
elsif number > 100
  puts 'The number is medium'
else
  puts 'The number is small'
end


if number > 900
  puts 'The number if very large'
end

# inline conditional
puts 'The number is very large' if number > 900
puts 'The number is very large' unless number <= 900