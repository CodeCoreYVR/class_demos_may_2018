-- CREATING A TABLE

/* This is a multi-line comment */

-- CREATE TABLE cars (
--   id SERIAL,
--   -- SERIAL is a special type to Postgres. It creates
--   -- an integer that auto-increments. When creating a new
--   -- column, we do not specify this value ourselves.
--   -- Postgres does it automatically.
--   -- This is meant to act a unique identifier for that
--   -- row like a person's name.
--   make VARCHAR(50),
--   -- The VARCHAR(<char-max>) is string type of with maximum
--   -- length of <char-max>.
--   model VARCHAR(255),
--   doors INTEGER,
--   -- INTEGER is a number type that can't have decimal values.
--   -- It can have negative values.
--   description TEXT
--   -- TEXT is string type that can be of any length.
-- );
-- Always terminate SQL queries with a `;`
-- This is NON-NEGOTIABLE. If you forget it, SQL
-- will think that you're still writing the query.

-- To run this or any other SQL files:

-- The following will run the SQL inside of
-- <sql-script-file> in the db with the name of <db-name>.

-- psql -d <db-name> < <sql-script-file>

-- ALTER A TABLE

-- ALTER TABLE "cars"
--   ADD COLUMN "drive_system" VARCHAR(255);
-- ALTER TABLE cars
--   RENAME COLUMN drive_system TO drive;

-- CRUD

-- CREATING ROWS

-- INSERT INTO students
--   (first_name, last_name, email, phone_number)
--   VALUES
--   ('Jon', 'Snow', 'js@winterfell.gov', '778.994.8776');

-- INSERT INTO students
--   (first_name, last_name, email, phone_number)
--   VALUES
--   ('Cersei', 'Baratheon', 'cersei@kingslanding.com', '778.994.9999')
--   RETURNING *;

-- READ

-- SELECT * FROM students;
-- This will get all rows from the students including
-- the data from all columns.

-- SELECT id, first_name, last_name
-- FROM students
-- WHERE id = 1;

-- Select all students whose ids are more than 100

-- SELECT id, first_name, last_name
-- FROM students
-- WHERE id > 100;

-- Select all students that have registered in the last 50 days

-- SELECT id, first_name, registration_date
-- FROM students
-- WHERE registration_date > '2018-04-21';

-- SELECT id, first_name, registration_date
-- FROM students
-- WHERE registration_date > current_date - interval '50' day;

-- SELECT id, first_name, registration_date
-- FROM students
-- WHERE registration_date > now() - interval '50 days';


-- Select all students whose ids are more than
-- 100 and less than 200
-- SELECT id, first_name
--   FROM students
--   WHERE id > 100 AND id < 200;

-- SELECT id, first_name, age
--   FROM students
--   WHERE age > 20 AND age < 40;

-- Select all student whose is null

-- SELECT id, first_name, age
--   FROM students
--   WHERE age IS NULL;

-- Select all students whose age is not null and
-- is greater than 50

-- SELECT id, first_name, age
--   FROM students
--   WHERE age IS NOT NULL AND age > 50;

-- Find all students whose first names begin
-- with 'Jo'

-- SELECT id, first_name
--   FROM students
--   WHERE first_name LIKE 'Jo%';
-- Whe using LIKE or ILIKE, you must specify % in the
-- search pattern to indicate which part of the string
-- doesn't matter

-- Select all students whose first names or last names
-- contain 'nn'

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';
-- Unlike LIKE, ILIKE matches ignore the letter casing.

-- BETWEEN

-- Select all students between the ages 35 and 55

-- SELECT id, first_name, age
--   FROM students
--   WHERE age BETWEEN 35 AND 40;
--   -- WHERE age >= 35 AND age <= 40;

-- ORDER

-- Find all students whose first_name begin with 'Jo'
-- ordered by their last names

-- SELECT id, last_name, first_name, age
--   FROM students
--   WHERE first_name ILIKE '%Jo%'
--   ORDER BY last_name ASC;

-- SELECT id, last_name, first_name, age
--   FROM students
--   WHERE first_name ILIKE '%nn%'
--   ORDER BY age ASC, first_name ASC;

-- LIMIT

-- Find the first 3 students whose names begin with
-- 'ke'

-- SELECT id, first_name
--   FROM students
--   WHERE first_name ILIKE 'ke%'
--   LIMIT 3;

-- OFFSET

-- SELECT id, first_name
--   FROM students
--   OFFSET 20 -- skips first 20 students
--   LIMIT 10; -- limits result to 10 students


-- AGGREGATE FUNCTIONS

-- These allows to do calculations on data we get from
-- our query. This usually means combining into a
-- smaller set of data.

-- COUNT

-- Get the number of students in the database

-- SELECT count(*) FROM students;

-- Use AS to alias the name of a column. This will
-- change its name in the results.

-- SELECT count(*) AS student_count FROM students;

-- SUM

-- Find out the total years life experience of
-- all students

-- AVG

-- Find out the average age of all students in the db

-- ROUND
-- ROUND is not an AGGREGATE FUNCTION. It's simply
-- a math function that rounds a number.

-- MAX & MIN

-- SELECT
--   COUNT(*) AS total_students,
--   SUM(age) AS total_years,
--   ROUND(AVG(age), 2) AS average_age,
--   MAX(age) AS oldest_age,
--   MIN(age) AS youngest_age
-- FROM students;

-- GROUP BY

-- Count the number of students by their age

-- SELECT
--     count(*),
--     age,
--     ARRAY_AGG(first_name) AS names
--     -- ARRAY_AGG is an aggregate function like SUM
--     -- that push all items to an array.
--   FROM students
--   GROUP BY age
--   ORDER BY age;

-- UPDATE

UPDATE students
  SET first_name = 'Something Else'
  WHERE id = 1
  RETURNING *;

-- DELETE

DELETE FROM students WHERE id = 1;

-- When using DELETE and UPDATE, a filter must be present
-- otherwise it will apply to the ENTIRE TABLE! 😨