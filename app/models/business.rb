class Business < ApplicationRecord
    has_secure_password
    has_many :jobs, dependent: :destroy
    has_many :taken_down_jobs, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :business_name, presence: true, uniqueness: true

end
