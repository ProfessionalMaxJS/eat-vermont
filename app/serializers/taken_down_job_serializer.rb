class TakenDownJobSerializer < ActiveModel::Serializer
  attributes :id, :position, :hours, :pay, :email, :phone, :point_person, :position_filled
  has_one :business
end
