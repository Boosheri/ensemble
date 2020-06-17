class CreateRoleTags < ActiveRecord::Migration[5.2]
  def change
    create_table :role_tags do |t|
      t.integer :tagable_id
      t.string :tagable_type
      t.references :role, foreign_key: true

      t.timestamps
    end
  end
end
