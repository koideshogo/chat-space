# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|integer|unique: true, null:false|
|email|string|unique: true, null:false|
|password|string|null: false|
|name|string|unique: true, null: false, index: true|

### Association
- has_many :posts
- has_many :groups, through: :users_groups
- has_many :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|integer|unique: true, null: false|
|name|string|unique: true, null: false|

### Association
- has_many :users, through: users_groups
- has_many :posts
- has_many :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- 

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|group|references|foreign_key :true, null: false|
|user|references|foreign_key :true, null: false|
|image|string|
 
 ### Association
 - belongs_to :user
 - belongs_to :group



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
