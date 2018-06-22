require "./cookie_bag.rb"
require "./cookie.rb"
require "./oreo.rb"

c1 = Cookie.new(8, 19)
c2 = Cookie.new(5, 19)
c3 = Cookie.new(7, 17)
o1 = Oreo.new(1, 17)
o2 = Oreo.new(2, 19, "chocolate")

puts "Creating bag"
cb = CookieBag.new(4)

puts "Adding cookies"
cb.add(c1)
cb.add(c2).add(c3).add(o1).add(o2)

cb.details

puts "Taking cookies"
cb.take
cb.take
cb.take
cb.take
cb.take
cb.take
