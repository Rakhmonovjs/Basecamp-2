class Message < ApplicationRecord
  belongs_to :project
  has_many :messengers, dependent: :destroy
end
