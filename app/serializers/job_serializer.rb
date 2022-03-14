class JobSerializer < ActiveModel::Serializer
  attributes :id, :position, :hours, :rate, :phone, :email
  has_one :business
end
