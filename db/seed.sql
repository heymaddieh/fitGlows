drop table if exists user_input;

create table user_input(
id SERIAL PRIMARY KEY,
sex varchar(40),
weight_kg int,
height_cm int,
age int,
hip_cm int,
waist_cm int,
illiac_cm int,
google_id int);

insert into user_input(sex, weight_kg, height_cm, age, hip_cm, waist_cm) 
values ('female', 57.6, 165.1, 21, 88.9, 63.5);