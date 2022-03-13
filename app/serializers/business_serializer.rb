class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :address, :phone, :website, :business_type, :user_name, :email_address
end
