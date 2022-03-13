class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :address
      t.integer :phone
      t.string :website
      t.string :business_type

      t.timestamps
    end
  end
end
