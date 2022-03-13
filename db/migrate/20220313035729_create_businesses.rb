class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :business_name
      t.string :address
      t.integer :phone
      t.string :website
      t.string :business_type
      t.string :user_name
      t.string :email_address
      t.string :password_digest

      t.timestamps
    end
  end
end
