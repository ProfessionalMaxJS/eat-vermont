class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :town, :link, :username, :password_digest
end
