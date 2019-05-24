class Production < ApplicationRecord
  belongs_to :post
  validate :compare_dates

  def compare_dates
    if production_end_date < production_start_date
        errors.add(:production_end_date, "must have an end date on or after start date")
    end
end
end
