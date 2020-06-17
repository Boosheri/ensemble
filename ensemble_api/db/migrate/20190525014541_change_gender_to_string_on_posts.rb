class ChangeGenderToStringOnPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :gender, :string
  end
end
