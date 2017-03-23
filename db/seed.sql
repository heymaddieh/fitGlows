drop table if exists user_input;
drop table if exists workouts;

create table user_input(
id SERIAL PRIMARY KEY,
age varchar(40),
bf_perc varchar(40),
bmi varchar(40),
height_cm varchar(40),
hip_cm varchar(40),
illiac_cm varchar(40),
sex varchar(40),
waist_cm varchar(40),
weight_kg varchar(40),
google_id varchar(40));

create table workouts(
  id SERIAL PRIMARY KEY,
  wallPushups varchar(40),
  doorPulls varchar(40),
  deadBugs varchar(40),
  wallHipHinges varchar(40),
  gluteBridges varchar(40),
  userId integer
  );


-- SELECT user_input.id, workouts.userId
-- FROM user_input
-- INNER JOIN workouts ON user_input.id=workouts.userId;



insert into user_input(sex, weight_kg, height_cm, age, hip_cm, waist_cm, illiac_cm) 
values ('female', 57.6, 165.1, 21, 88.9, 63.5, null);

insert into workouts(wallPushups, doorPulls, deadBugs, wallHipHinges, gluteBridges)
values ('73', '89', '68', '39', '74');