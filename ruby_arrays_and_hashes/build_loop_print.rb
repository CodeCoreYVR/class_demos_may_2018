# Exercise: Build, Loop & Print
# Write a script that asks for names
# and stores them in an array. When
# the user enters "exit", stop asking for
# names then print all names in the array capitalized.
# Also, try printing the names reversed as well.

names = []

loop do
  print "Give me a name!\n> "
  input = gets.chomp
  break if input.downcase == "exit"
  names << input.capitalize
end


puts "Here the names."
puts names



