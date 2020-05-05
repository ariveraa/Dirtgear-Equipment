create table dirtgear_users(
    user_id serial primary key, 
    first_name varchar(100), 
    last_name varchar(100), 
    email varchar(200), 
    profile_pic varchar(500), 
    password varchar(200)
);

create table dirtgear_phone(
    phone_id serial primary key, 
    user_id  int references dirtgear_users(user_id), 
    phone_number varchar(20)
);

create table dirtgear_address(
    address_id serial primary key, 
    user_id  int references dirtgear_users(user_id), 
    address varchar(300)
);

create table dirtgear_zipcode(
    zipcode_id serial primary key, 
    user_id  int references dirtgear_users(user_id), 
    zipcode varchar(20)
);

create table dirtgear_city(
    city_id serial primary key, 
    user_id  int references dirtgear_users(user_id), 
    city varchar(200)
);

create table dirtgear_zipcode(
    zipcode_id serial primary key, 
    user_id  int references dirtgear_users(user_id), 
    zipcode varchar(20)
);

create table dirtgear_listings( 
    listing_id serial primary key, 
    user_id int references dirtgear_users(user_id),
    make varchar(200), 
    model varchar(200), 
    hours varchar(7), 
    description varchar(2000)
);