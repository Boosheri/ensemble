class ChangeGenderToStringOnProfiles2 < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :gender, :string
  end
end
