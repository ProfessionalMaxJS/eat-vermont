class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :business_name
      t.string :town
      t.string :link
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
