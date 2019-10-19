# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|unique: true, null:false|
|email|string|unique: true, null:false|
|password|string|null: false|
|user_name|string|unique: true, null:false|

### Association
- has_many :posts
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupid|integer|unique: true, null: false|
|group_name|string|unique: true, null: false|
|group_create_user_id|integer|null: false, foreign_key: true|
|group_create_user_name|string|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :posts

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null :false|
|group_id|integer|foreign_key :true|
|user_id|integer|foreign_key :true|
|image|string|
|user_name|string|foreign_key :true|
 
 ### Association
 -belongs_to :user
 -belongs_to :group



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
