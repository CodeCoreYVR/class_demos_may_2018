# In Ruby, we define classes with the `class` keyword.
# By convention, we use CapitalizedCamelCase for class
# names. However, the file contains class
# is named using snake_case.
# It's best practice to create one file per class.

class Cookie
  # Class variables can be read and mutated by every
  # instance of a class including class methods.
  @@color = "brown"

  # The method below is defined as a `class` method
  # which means that it can only be called by the
  # class itself. It's not useable by instance of
  # Cookie.
  # Example: Cookie.info

  # `self.` whithin a class block refers to the class,
  # but inside a method it refers to the instance
  # calling the method.
  def self.info
    # Class method can use a class variable
    # Inside a class method, self refers to the class.

    # We can the name of an object with ".name" method.
    # This useful to display the name of the class.
    "I'm the #{self.name} class and I create #{@@color} cookies"
  end

  # `initialize` is a special method that is called 
  # every time an instance is created. This is Ruby's
  # version of the `constructor` method.
  # Example: Cookie.new <-- initialize is called
  def initialize(sugar, butter)
    # Initialize can use a class variable
    puts "Creating a #{@@color} cookie 👩‍🍳 🍪 ..."
    # Variables prefixed with @ are called instance variables.
    # They only exist within the instance class meaning that
    # ALL instance methods can used them.
    @sugar = sugar
    @butter = butter
  end

  # The instance method `sugar` is an attribute reader,
  # because it returns the value of the instance variable
  # @sugar. In some languages, this is called a getter.
  def sugar
    @sugar
  end
  # usage: Cookie.new(10, 20).sugar

  # The instance method `sugar=` is an attribute write,
  # because it allows us to assign a value to the
  # an instance variabler. In some languages,
  # this is called a setter.
  def sugar=(amount)
    @sugar = amount
  end
  # usage: Cookie.new(10, 20).sugar = 30

  # The following will create an attribute reader method
  # like the method above for sugar. It will return the
  # value of the @butter. This shortcut exist because
  # this pattern is commonplace.
  # attr_reader :butter
  # attr_writer :butter

  # This is shortcut for creating a reader and writer
  # for @butter
  attr_accessor(:butter)

  def details
    "sugar: #{@sugar} / butter: #{@butter}"
  end

  def eat
    "Nom, nom, nom!"
  end

  def bake_and_eat(minutes)
    puts bake(minutes)
    eat
  end

  def change_color(new_color)
    @@color = new_color
  end

  # The `private` keyword will all methods below
  # only accessible within the body of the
  # class meaning that these private methods
  # cannot be called by instances of the class.

  # Make methods private when you want to hide code
  # from users of the class. It represents internal
  # implementation that may change.
  private
  def bake(minutes)
    "Baking the cookie in #{minutes} mins."
  end

  def hidden_method
  end
  # bake and hidden_method are private
  # Keep private methods at the bottom of your
  # classes.
end

# Example usage:

c = Cookie.new(10, 20)
# c.bake
c.eat

# To get the class of an object use the ".class" method.
# This method can be used with any object.

c.class # returns the Cookie class
Cookie.class # returns the Class class

# In pry, use the command `ls` and an object to
# list all usable class and instance methods.
# example: `ls Cookie`