class CreateAuditions < ActiveRecord::Migration[5.2]
  def change
    create_table :auditions do |t|
      t.date :audition_start_date
      t.date :audition_end_date
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
