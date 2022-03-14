class CreateTakenDownJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :taken_down_jobs do |t|
      t.string :position
      t.string :hours
      t.float :rate
      t.string :phone
      t.string :email
      t.boolean :job_filled_here
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
