update dirtgear_users
set first_name = $2
where user_id = $1;

update dirtgear_users
set last_name = $3
where user_id =$1; 

update dirtgear_users 
set email = $4 
where user_id = $1; 