class Project < ApplicationRecord
  belongs_to :user
  has_many :upls
  has_many :tasks, dependent: :destroy

end
