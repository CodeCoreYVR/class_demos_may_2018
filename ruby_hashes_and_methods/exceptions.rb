puts 'hey'
begin
  1 / 0
rescue ZeroDivisionError => exception
  puts 'cannot divide by zero'
rescue => exception
  puts 'Something wrong happend!'
  puts exception.message
end
puts 'bye'