class JobSerializer < ActiveModel::Serializer
  attributes :id, :position, :hours, :pay, :email, :phone, :point_person
  has_one :business
end
