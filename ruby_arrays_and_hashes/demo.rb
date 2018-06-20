# Doc Hunt - Arrays #1
# Find out how to get the number of elements
# in two different ways

a = [1, 2, 3, 4, 5]

a.size
a.count
a.length

# Doc Hunt - Arrays #2
# Find an array method to turn a multi-dimensional
# array into a one-dimensional array

two_d  = [[1,2,3], [6,7,8]]

two_d.flatten

# Doc Hunt - Arrays #3
# Find out how to add and remove elements
# from the beginning of arrays

a.shift # to remove the first element
        # returns the removed element

a.unshift(10) # to add to the front of the array
              # returns the mutated array

# Doc Hunt - Arrays #4
# Find out how to convert a string sentence into
# array of words.

"Hello CodeCore Students".split(" ")

# Doc Hunt - Arrays #5

["Hello", "CodeCore", "Students"].join("    ")

# Exercise: Build, Loop & Print
# Build an array containing five numbers, then iterate
# through the array and print each number squared.

puts "Printing values in array!"
[4, 7, 1, 9, 0, 7, 10].each do |value|
  puts value * value
end


# Exercise: Printing Multiple Dim.
# Print every element multiplied by itself in
# the two-dimensional array below. Try to
# find another of doing it.

two_d_a = [[1,7,3], [4,4,6], [7,2,9]]

puts "With nested each"
two_d_a.each do |sub_arr|
  sub_arr.each do |v|
    puts v * v
  end
end

puts "With flatten"
two_d_a.flatten.each do |v|
  puts v * v
end

# Hashes

movies = {
  "Forrest Gump" => "Robert Zemeckis",
  "The Matrix" => "The Watchowskis",
  "Get Out" => "Jordan Peele"
}

# Doc Hunt - Hashes #1
# Find a method that returns an array of a hash's keys.

movies.keys

# Doc Hunt - Hashes #2

movies.values

# Iterating over a hash

movies.each do |key, value|
  puts "The director for #{key} is #{value}"
end

# Exercise
# Write a hash that contains three Canadian provinces
# as keys and their capitals as values. Then loop
# through it and print each province and its capital.

provinces = {
  "British-Columbia" => "Victoria",
  "New-Brunswick" => "Fredericton",
  "Quebec" => "Quebec"
}

puts "Provinces & Capitals"
provinces.each do |province, capital|
  puts "#{province}: #{capital}"
end

# Using symbols as keys in hashes

course_info = {
  :name => "CodeCore Bootcamp",
  :length => "12 weeks",
  :location => "142 W Hastings St"
}

course_info_short = {
  name: "CodeCore Bootcamp",
  length: "12 weeks",
  location: "142 W Hastings St"
}

# Exercise
# Write some code that takes the hash above
# then prints if the city is large (more than 100,000).
# Print something like: Vancouver is a large city

bc_cities_population = {
  vancouver: 2_135_201,
  victoria: 316_327,
  abbotsford: 149_855,
  kelowna: 141_767,
  nanaimo: 88_799,
  white_rock: 82_368,
  kamloops: 73_472,
  chilliwack: 66_382
}

puts "Large cities only"
bc_cities_population.each do |city, population|
  # Using a symbol in string interpolation will automatically
  # call .to_s to convert into a string.
  puts "#{city.capitalize} is a large city" if population > 100_000
end