class Upl < ApplicationRecord
  belongs_to :project
  has_one_attached :fayl
end
