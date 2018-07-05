# When writing a test with minitest, always
# require the minitest library
require "minitest/autorun.rb"
# Then, you must require the module you are testing
require "./vector"

# For a list of all support assert_ methods
# from minitest, go to:
# http://ruby-doc.org/stdlib-2.0.0/libdoc/minitest/rdoc/MiniTest/Assertions.html

class VectorTest < Minitest::Test
  def test_initialize_sets_x_and_y_accessors
    # Given: An initialize vector with correct arguments
    # Then: Initializing the vector
    vec = Vector.new(2, 5)

    assert_equal(2, vec.x)
    assert_equal(5, vec.y)
  end

  def test_adding_vectors
    # Given: two vectors
    vec_a = Vector.new(2, 6)
    vec_b = Vector.new(6, 2)

    # When: adding two vectors together
    vec_c = vec_a + vec_b

    # Then: a new vector that is the sum of both
    assert_equal(8, vec_c.x)
    assert_equal(8, vec_c.y)
  end

  def test_length
    # Given: A vector
    vec = Vector.new(3, 4)

    # When: calling length
    length = vec.length

    # Then: Should be correct
    assert_equal(5, length)
    assert_in_delta(8.0622, Vector.new(4, 7).length, 0.0001)
  end
end

