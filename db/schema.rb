# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_14_044249) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "business_name"
    t.string "town"
    t.string "link"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "position"
    t.string "hours"
    t.float "rate"
    t.string "phone"
    t.string "email"
    t.bigint "business_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_jobs_on_business_id"
  end

  create_table "taken_down_jobs", force: :cascade do |t|
    t.string "position"
    t.string "hours"
    t.float "rate"
    t.string "phone"
    t.string "email"
    t.boolean "job_filled_here"
    t.bigint "business_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_taken_down_jobs_on_business_id"
  end

  add_foreign_key "jobs", "businesses"
  add_foreign_key "taken_down_jobs", "businesses"
end
