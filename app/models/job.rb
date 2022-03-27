class Job < ApplicationRecord
  belongs_to :business

  validates :rate, numericality: true, numericality: {greater_than: 0}
end
