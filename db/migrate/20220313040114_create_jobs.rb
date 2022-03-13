class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :position
      t.string :hours
      t.float :pay
      t.string :email
      t.integer :phone
      t.string :point_person
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
