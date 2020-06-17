class DropRoleTags < ActiveRecord::Migration[5.2]
  def change
    drop_table :role_tags
  end
end
