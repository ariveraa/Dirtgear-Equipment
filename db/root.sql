create table dirtgear_users(
    user_id serial primary key, 
    first_name varchar(100), 
    last_name varchar(100), 
    email varchar(200), 
    profile_pic varchar(500), 
    password varchar(200)
)