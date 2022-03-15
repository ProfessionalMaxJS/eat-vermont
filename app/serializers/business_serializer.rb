class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :town, :link, :username, :jobs
end
