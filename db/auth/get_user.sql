select first_name, last_name, email, profile_pic, password from dirtgear_users
where email = $1; 
