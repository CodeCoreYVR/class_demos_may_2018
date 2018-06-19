print 'What is the year of your car? '
year = gets.to_i

if year < 1950
  puts 'Very old car'
elsif year > 1950 && year < 2000
  puts 'Old car'
elsif year >= 2000 && year < 2018
  puts 'New Car'
else
  puts 'Future car'
end

if year > 2018
  puts 'Future car'
elsif year >= 2000
  puts 'New Car'
elsif year > 1950
  puts 'Old Car'
else
  puts 'Very old car'
end