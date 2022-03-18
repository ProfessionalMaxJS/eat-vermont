class Business < ApplicationRecord
    has_secure_password
    has_many :jobs, dependent: :destroy
    has_many :taken_down_jobs, dependent: :destroy
end
