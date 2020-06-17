class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.text :about
      t.date :birth_date
      t.integer :gender
      t.string :languages
      t.string :skills

      t.timestamps
    end
  end
end
