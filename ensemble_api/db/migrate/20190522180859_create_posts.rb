class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.string :production_type
      t.integer :gender
      t.integer :min_age
      t.integer :max_age
      t.boolean :paid
      t.boolean :union
      t.string :audition_location
      t.string :company
      t.string :contact_name
      t.string :contact_email
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
