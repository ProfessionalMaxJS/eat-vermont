class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :website, :business_type
end
