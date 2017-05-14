# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
views           | integer   | default: 0
photo_count     | integer   | default: 0
follower_count  | integer   | default: 0
user_img_url    | string    | default: (url to guest image)

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
img_url     | string    | not null
title       | string    | not null
description | text      |
width       | integer   | not null, default: false
height      | integer   | not null, default: false

## follows
column name | data type | details
------------|-----------|-----------------------
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references notes), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed
body        | text      | not null
