# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_24_014125) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "auditions", force: :cascade do |t|
    t.date "audition_start_date"
    t.date "audition_end_date"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_auditions_on_post_id"
  end

  create_table "follows", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_follows_on_post_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "post_roles", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_roles_on_post_id"
    t.index ["role_id"], name: "index_post_roles_on_role_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "production_type"
    t.integer "gender"
    t.integer "min_age"
    t.integer "max_age"
    t.boolean "paid"
    t.boolean "union"
    t.string "audition_location"
    t.string "company"
    t.string "contact_name"
    t.string "contact_email"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "productions", force: :cascade do |t|
    t.date "production_start_date"
    t.date "production_end_date"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_productions_on_post_id"
  end

  create_table "profile_roles", force: :cascade do |t|
    t.bigint "role_id"
    t.bigint "profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profile_roles_on_profile_id"
    t.index ["role_id"], name: "index_profile_roles_on_role_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.text "about"
    t.date "birth_date"
    t.integer "gender"
    t.string "languages"
    t.string "skills"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "auditions", "posts"
  add_foreign_key "follows", "posts"
  add_foreign_key "follows", "users"
  add_foreign_key "post_roles", "posts"
  add_foreign_key "post_roles", "roles"
  add_foreign_key "posts", "users"
  add_foreign_key "productions", "posts"
  add_foreign_key "profile_roles", "profiles"
  add_foreign_key "profile_roles", "roles"
  add_foreign_key "profiles", "users"
end
