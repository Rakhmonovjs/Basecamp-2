class Project < ApplicationRecord
  belongs_to :user
  has_many :upls, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :messengers, dependent: :destroy

end
