class CreatePostRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :post_roles do |t|
      t.references :role, foreign_key: true
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
