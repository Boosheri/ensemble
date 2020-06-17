class ChangeGenderToStringOnProfiles < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :gender, :string, :limit => 6
  end
end
