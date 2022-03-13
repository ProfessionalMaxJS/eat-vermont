class CreateTakenDownJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :taken_down_jobs do |t|
      t.string :position
      t.string :hours
      t.float :pay
      t.string :email
      t.integer :phone
      t.string :point_person
      t.boolean :position_filled, default: false
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
