class CreateProductions < ActiveRecord::Migration[5.2]
  def change
    create_table :productions do |t|
      t.date :production_start_date
      t.date :production_end_date
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
