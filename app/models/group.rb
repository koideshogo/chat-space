class Group < ApplicationRecord
  has_many :users, through: :group_users
  has_many :group_users
  validates :name, presence: true, uniqueness: true


  has_many :messages
  hasa_many :group_users
  has_many :groups, through: :group_users
end
