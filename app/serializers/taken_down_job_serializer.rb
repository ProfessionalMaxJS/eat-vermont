class TakenDownJobSerializer < ActiveModel::Serializer
  attributes :id, :position, :hours, :rate, :phone, :email, :job_filled_here
  has_one :business
end
