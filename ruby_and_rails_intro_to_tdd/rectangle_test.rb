require "minitest/autorun"
require "./rectangle.rb"

class RectangleTest < Minitest::Test
  def test_initialize_creates_rectangle_with_width_and_height
    r = Rectangle.new(10, 20)

    assert_equal(10, r.width)
    assert_equal(20, r.height)
  end

  def test_initialize_with_negative_width
    assert_raises do
      # when testing for raised (or thrown) errors,
      # we have the code that triggers the error
      # inside of a block
      Rectangle.new(-10, 20)
    end
  end

  def test_area_method
    r = Rectangle.new(5, 10)

    assert_equal(50, r.area)
  end

  # Exercise: TDD a method that returns the perimeter
  # of a rectangle
  def test_perimeter_method
    r = Rectangle.new(5, 15)

    assert_equal(40, r.perimeter)
  end

  # Exercise: TDD a method `is_square?` that returns
  # true if the rectangle is square and false otherwise.

  def test_is_square_method
    rec = Rectangle.new(10, 10)
    assert_equal(true, rec.is_square?)
    assert_equal(false, Rectangle.new(10, 4).is_square?)
  end

  # def test_is_square_returns_false_with_a_non_square
  # end
end