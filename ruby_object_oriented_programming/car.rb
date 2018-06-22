class Car
  # Exercise: Shared Methods
  def self.max_speed
    200
  end

  # Exercise: Accessing Attributes
  attr_accessor :model, :type, :capacity

  # Exercise: Attributes
  def initialize(model, type, capacity)
    @model = model
    @type = type
    @capacity = capacity
  end

  # Exercise: Car Does Things
  def drive
    # Exercise: Internal Methods
    ignite_engine
    puts "Wehhhhhh..."
  end

  def stop
    puts "Scrreeech"
  end

  def park
    puts "I'm parked!"
  end
  # Exercise: Card Does Private Things

  private
  def pump_gas
    puts "Pumping gas... ⛽️"
  end

  def ignite_engine
    puts "Igniting engine... 🔥🔥🔥"
  end
end

# my_volvo = Car.new
# my_volvo.drive
# my_volvo.stop
# my_volvo.park
# my_volvo.ignite_engine # raises an error

# class BritishColumbia
# end

ae86 = Car.new("Toyota AE86", "Sport Compact", 4)
ae86.capacity = 2

p ae86