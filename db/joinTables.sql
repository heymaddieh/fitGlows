SELECT user_input.id, workouts.userId
FROM user_input
INNER JOIN workouts ON user_input.id=workouts.userId;